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
				"app"=>"Mark-IT",
				"dev"=>"Diestro, Aquino, Laguisma"
			];
			return str_replace(['+','/','='],['-','_',''], base64_encode(json_encode($h)));
		}

		protected function generatePayload($uid, $un, $fn) {
			$p = [   
				'uid'=>$uid,
				'un'=>$un,
				'fn'=>$fn,
				'iby'=>'Diestro Lawrenz Sese',
				'ie'=>'ramirez@futuredev.com',
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
            $encryptedPassword = $this->encrypt_password($dt->user_pword);

            $payload = array(
                'uname'=>$dt->user_uname,
                'pword'=>$this->encrypt_password($dt->user_pword)
            );

            $sql = "INSERT INTO tbl_user( user_name, user_lname, user_uname,user_contact,user_address, user_pword, user_role) 
                           VALUES ('$dt->user_name','$dt->user_lname','$dt->user_uname','$dt->user_contact','$dt->user_address', '$encryptedPassword', '$dt->user_role')";
                     

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
					$user_id = $res['data'][0]['user_id'];
					$user_contact =$res['data'][0]['user_contact'];
					$user_address = $res['data'][0]['user_address'];
					$user_role = $res['data'][0]['user_role'];
		
				

					$code = 200;
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array("user_id"=>$user_id, "Fullname"=>$user_name, "user_Contact"=>$user_contact, "user_Address"=>$user_address, "user_role"=>$user_role);
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
			// print_r($dt);
			$payload = $dt;
			$driver_email = $dt->driver_email;
			$driver_password = $dt->driver_password;
			$payload = "";
			$remarks = "";
			$message = "";
			$code = 0;

			$sql = "SELECT * FROM tbl_driver WHERE driver_email = '$driver_email' AND driver_password = '$dt->driver_password' LIMIT 1";
			$res = $this->gm->generalQuery($sql, "Incorrect username or password");
			
			if($res['code'] == 200) {
				
					$driver_id = $res['data'][0]['driver_id'];
					$driver_name =$res['data'][0]['driver_name'];
					$driver_email = $res['data'][0]['driver_email'];
				
		
				

					$code = 200;
					$remarks = "success";
					$message = "Logged in successfully";
					$payload = array("driver_id"=>$driver_id, "Fullname"=>$driver_name, "driver_email"=>$driver_email);
				// if($this->pword_check($user_pword, $res['data'][0]['user_pword'])) 
				// {
					
				
				// 	$user_name =$res['data'][0]['user_name'];
				// 	$user_id = $res['data'][0]['user_id'];
				// 	$user_contact =$res['data'][0]['user_contact'];
				// 	$user_address = $res['data'][0]['user_address'];
				// 	$user_role = $res['data'][0]['user_role'];
		
				

				// 	$code = 200;
				// 	$remarks = "success";
				// 	$message = "Logged in successfully";
				// 	$payload = array("user_id"=>$user_id, "Fullname"=>$user_name, "user_Contact"=>$user_contact, "user_Address"=>$user_address, "user_role"=>$user_role);
				// } 
				// else 
				// {
				// 	$payload = null; 
				// 	$remarks = "failed"; 
				// 	$message = "Incorrect username or password";
				// }
			}	
			else 
			{
				$payload = null; 
				$remarks = "failed"; 
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $code);
		}


    }
    ?>