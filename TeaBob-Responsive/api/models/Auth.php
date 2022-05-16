<?php
	class Auth {
		protected $gm;
		protected $pdo;
    

		public function __construct(\PDO $pdo) {
			$this->gm = new GlobalMethods($pdo);
			$this->pdo = $pdo;
		}
		
		########################################
		# 	USER AUTHORIZATION RELATED METHODS
		########################################
		protected function generateHeader() {
			$h=[
				"typ"=>"JWT",
				"alg"=>'HS256',
				"app"=>"IT MOVERS",
				"dev"=>"Balatbat, Laguatan, Santos"
			];
			return str_replace(['+','/','='],['-','_',''], base64_encode(json_encode($h)));
		}

		protected function generatePayload($uid, $un, $fn) {
			$p = [   
				'uid'=>$uid,
				'un'=>$un,
				'fn'=>$fn,
				'iby'=>'Balatbat Jivan Lance G.',
				'ie'=>'balatbat@futuredev.com',
				'idate'=>date_create()
			];
			return str_replace(['+','/','='],['-','_',''], base64_encode(json_encode($p)));
		}
		
		protected function generateToken($userid, $uname, $fullname) {
			$header = $this->generateHeader();
			$payload = $this->generatePayload($userid, $uname, $fullname);
			$signature = hash_hmac('sha256', "$header.$payload", "www.gordoncollege.edu.ph");
			return str_replace(['+','/','='],['-','_',''], base64_encode($signature));
		}

        ########################################
		# 	USER AUTHENTICATION RELATED METHODS
		########################################
		public function encrypt_password($pword) {
			$hashFormat="$2y$10$";
		    $saltLength=22;
		    $salt=$this->generate_salt($saltLength);
		    return crypt($pword,$hashFormat.$salt);
		}


        protected function generate_salt($len) {
			$urs=md5(uniqid(mt_rand(), true));
	    $b64String=base64_encode($urs);
	    $mb64String=str_replace('+','.', $b64String);
	    return substr($mb64String,0,$len);
		}

        public function pword_check($pword, $existingHash) {
			$hash=crypt($pword, $existingHash);
			if($hash===$existingHash){
				return true;
			}
			return false;
		}

		public function regUser($dt){
			
			$payload = "";
			$remarks = "";
			$message = "";
            $payload = $dt;
			$code = 200;
            $encryptedPassword = $this->encrypt_password($dt->user_pword);

            $payload = array(
                'uname'=>$dt->user_uname,
                'pword'=>$this->encrypt_password($dt->user_pword)
            );
			$sql = "SELECT * FROM tbl_user WHERE user_uname='$dt->user_uname' LIMIT 1";
            $res = $this->gm->exec_query($sql, "Incorrect username or password");
        
            if($res['code'] == 200) {
				$payload = null; 
                $remarks = "failed"; 
                $message = "Cannot connect";
			}  else {
				 $sql = "INSERT INTO tbl_user( user_name, user_lname, user_uname,user_contact,user_address, user_pword, user_role, user_otp) 
                           VALUES ('$dt->user_name','$dt->user_lname','$dt->user_uname','$dt->user_contact','$dt->user_address', '$encryptedPassword', '$dt->user_role', '$dt->user_otp')";
                     

                           $data = array(); $code = 0; $errmsg= ""; $remarks = "";
                           try {
                       
                               if ($res = $this->pdo->query($sql)->fetchAll()) {
                                   foreach ($res as $rec) { array_push($data, $rec);}
                                   $res = null; 
								   $code = 200; $message = "Successfully Registered"; $remarks = "success";
                                   return array("code"=>200, "remarks"=>"success");
                               }
                           } catch (\PDOException $e) {
                               $errmsg = $e->getMessage();
                               $code = 403;
                           }
               
            }
			 			   return $this->gm->sendPayload($payload, $remarks, $message, $code);                
        }

		 //CHANGE PASSWORD USER/ADMIN

		 public function ChangePassword($dt){
			$payload = $dt;
			$user_id = $dt->user_id;
			$old_password = $dt->old_password;
			$code = 0;
			
			$sql = "SELECT * FROM tbl_user WHERE user_id='$user_id' LIMIT 1";
			$res = $this->gm->generalQuery($sql, "Incorrect username or password");
			if($res['code'] == 200) {
				
				if($this->pword_check($old_password, $res['data'][0]['user_pword'])) {
					$encryptedPassword = $this->encrypt_password($dt->user_pword);
					$sql = "UPDATE `tbl_user` SET `user_pword` = '$encryptedPassword' WHERE `tbl_user`.`user_id` = '$dt->user_id'";
					$res = $this->gm->generalQuery($sql, "");
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array(
						"uid"=>$user_id
						);	
				
				} else {
					$payload = null; 
					$remarks = "failed"; 
					$message = "Incorrect username or password";
				}
			}	else {
				$payload = null; 
				$remarks = "failed"; 
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $code);
		}


			//CHANGE PASSWORD Driver

			public function ChangePassDriver($dt){
			$payload = $dt;
			$driver_id = $dt->driver_id;
			$old_password = $dt->old_password;
			$code = 0;
			
			$sql = "SELECT * FROM tbl_driver WHERE driver_id='$driver_id' LIMIT 1";
			$res = $this->gm->generalQuery($sql, "Incorrect username or password");
			if($res['code'] == 200) {
				
				if($this->pword_check($old_password, $res['data'][0]['driver_password'])) {
					$encryptedPassword = $this->encrypt_password($dt->driver_password);
					$sql = "UPDATE `tbl_driver` SET `driver_password` = '$encryptedPassword' WHERE `tbl_driver`.`driver_id` = '$dt->driver_id'";
					$res = $this->gm->generalQuery($sql, "");
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array(
						"uid"=>$driver_id
						);	
				
				} else {
					$payload = null; 
					$remarks = "failed"; 
					$message = "Incorrect username or password";
				}
			}	else {
				$payload = null; 
				$remarks = "failed"; 
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $code);
		}





		public function loginUser($dt){
			
			$payload = $dt;
			$user_uname = $dt->user_uname;
			$user_pword = $dt->user_pword;
			$payload = "";
			$remarks = "";
			$message = "";
			$code = 0;

			$sql = "SELECT * FROM tbl_user WHERE user_uname='$user_uname' LIMIT 1";
			$res = $this->gm->generalQuery($sql, "Incorrect username or password");
			if($res['code'] == 200) {
				if($this->pword_check($user_pword, $res['data'][0]['user_pword'])) {
					
				
					$user_name =$res['data'][0]['user_name'];
					$user_lname =$res['data'][0]['user_lname'];
					$user_id = $res['data'][0]['user_id'];
					$user_contact =$res['data'][0]['user_contact'];
					$user_address = $res['data'][0]['user_address'];
					$user_role = $res['data'][0]['user_role'];
					$is_agree = $res['data'][0]['is_agree'];
					$is_verified = $res['data'][0]['is_verified'];
		
				

					$code = 200;
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array("user_id"=>$user_id, "Fullname"=>$user_name, "Lastname"=>$user_lname, "user_Contact"=>$user_contact, "user_Address"=>$user_address, "user_role"=>$user_role, "is_agree"=>$is_agree, "is_verified"=>$is_verified);
				} else {
					$payload = null; 
					$remarks = "failed"; 
					$message = "Incorrect username or password";
				}
			}	else {
				$payload = null; 
				$remarks = "failed"; 
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $code);
		}





		//Driver LOGIN
		public function loginDriver($dt){

			$payload = $dt;
			$driver_email = $dt->driver_email;
			$driver_password = $dt->driver_password;
			$payload = "";
			$remarks = "";
			$message = "";
			$code = 0;

			$sql = "SELECT * FROM tbl_driver WHERE driver_email = '$driver_email' LIMIT 1";
			$res = $this->gm->generalQuery($sql, "Incorrect username or password");
			
			if($res['code'] == 200) {
				
				if($this->pword_check($dt->driver_password, $res['data'][0]['driver_password'])) 
				{

					$driver_id = $res['data'][0]['driver_id'];
					$driver_name =$res['data'][0]['driver_name'];
					$driver_email = $res['data'][0]['driver_email'];
				
		
				

					$code = 200;
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array("driver_id"=>$driver_id, "Fullname"=>$driver_name, "driver_email"=>$driver_email);
					
			
				} 
				else 
				{
					$payload = null; 
					$remarks = "failed"; 
					$message = "Incorrect username or password";
				}
			}	
			else 
			{
				$payload = null; 
				$remarks = "failed"; 
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $code);
		}

		public function registerDriver($dt){

			$payload = "";
			$remarks = "";
			$message = "";
            $payload = $dt;
			$fullname = $dt->driver_fname.' '.$dt->driver_lname;
            $encryptedPassword = $this->encrypt_password($dt->driver_password);

            $payload = array(
                'fullname'=>$fullname
            );

            $sql = "INSERT INTO tbl_driver( driver_name, driver_email, driver_contact, driver_password) 
                           VALUES ('$fullname','$dt->driver_email','$dt->driver_contact','$encryptedPassword')";
                     

                           $data = array(); $code = 0; $errmsg= ""; $remarks = "";
                           try {
                       
                               if ($res = $this->pdo->query($sql)->fetchAll()) {
                                   foreach ($res as $rec) { array_push($data, $rec);}
                                   $res = null; 
								   $code = 200; $message = "Successfully Registered"; $remarks = "success";
                                   return array("code"=>200, "remarks"=>"success");
                               }
                           } catch (\PDOException $e) {
                               $errmsg = $e->getMessage();
                               $code = 403;
                           }
						   return $this->gm->sendPayload($payload, $remarks, $message, $code);                
        }
		


    }
    ?>