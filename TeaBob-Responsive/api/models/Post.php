<?php


class Post{
    protected $gm, $pdo, $get;

    public function __construct(\PDO $pdo) {
        $this->pdo = $pdo;
        $this->gm = new GlobalMethods($pdo);
        $this->get = new Get($pdo);
    }



    public function verified($d) {
        $data = $d;
        $code_co_code = $data->code_co_code;

        $res = $this->gm->update('tbl_co_code', $data, "code_co_code = '$code_co_code'");
        if ($res['code'] == 200) {
			$payload = $res;
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }

    public function denied($d) {
        $data = $d;
        $code_co_code = $data->code_co_code;

        $res = $this->gm->update('tbl_co_code', $data, "code_co_code = '$code_co_code'");
        if ($res['code'] == 200) {
			$payload = $res;
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }



    // ADD PRODUCT
    // public function addProduct($data) {

    //     $code = 401;
    //     $payload = null;
    //     $remarks = "failed";
    //     $message = "Unable to retrieve data";
    //     $prodInfo = $data->prodInfo;

    //     $res = $this->gm->insert('tbl_products', $prodInfo);

    //     if($res['code']==200) {
    //         $code = 200;
    //         $payload = $res['data'];
    //         $remarks = "success";
    //         $message = "Successfully retrieved data";
    //     }
    //     return $this->gm->sendPayload($payload, $remarks, $message, $code);
    // }
    
		
		

    //ADD TO CART
    public function addCart($data) {
        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $prodInfo = $data->prodInfo;

        $res = $this->gm->insert('tbl_cart', $prodInfo);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
            // return $this->get->pullCart(null);
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
      
    }
    
    // Update Profile
    public function updateProfile($dt) {
        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";

        $res = $this->gm->update('tbl_user', $dt, "user_id = '$dt->user_id'");
        return $res;
        if($res['code']==200) {
            $code = 200;
            $payload = $res['payload'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
      
    }

        // Update cart
     public function updateCart($dt) {
            $code = 401;
            $payload = null;
            $remarks = "failed";
            $message = "Unable to retrieve data";
    
            $res = $this->gm->update('tbl_cart', $dt, "cart_id = '$dt->cart_id'");
            return $res;
            if($res['code']==200) {
                $code = 200;
                $payload = $res['payload'];
                $remarks = "success";
                $message = "Successfully retrieved data";
            }
            return $this->gm->sendPayload($payload, $remarks, $message, $code);
          
    }

        // Update order Status
        // public function updateStatus($dt) {
        //     $code = 401;
        //     $payload = null;
        //     $remarks = "failed";
        //     $message = "Unable to retrieve data";
    
        //     $res = $this->gm->update('tbl_cocode', $dt, "user_id = '$dt->user_id'");
        //     return $res;
        //     if($res['code']==200) {
        //         $code = 200;
        //         $payload = $res['payload'];
        //         $remarks = "success";
        //         $message = "Successfully retrieved data";
        //     }
        //     return $this->gm->sendPayload($payload, $remarks, $message, $code);
          
        // }

    //CHECK OUT
    public function addCheck($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $checkInfo = $data->checkInfo;
    

        $res = $this->gm->insert('tbl_checkout', $checkInfo);

        
        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
            // return $this->get->pullCart(null);
        }
        
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
      
    }

    //CHECK OUT
    public function addHist($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $histInfo = $data->checkInfo;
    

        $res = $this->gm->insert('tbl_history', $histInfo);

        
        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
            // return $this->get->pullCart(null);
        }
        
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
      
    }

    public function checkOutAll($d)
    {
        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";

        $res = $this->gm->insert('tbl_checkout', $d);


        if($res['code']==200) {
            $code = 200;
            $payload = $res;
            $remarks = "success";
            $message = "Successfully retrieved data";
            // return $this->get->pullCart(null);
        }

        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }   


    public function placeOrder($dt){

        for ($i = 0; $i < sizeof($dt); $i++){
            $prod_name[]  = $dt[$i]->prod_name;
            $user_id[] = $dt[$i]->user_id;
            $add_pearl[] =$dt[$i]->add_pearl;
            $add_cpuff[] = $dt[$i]->add_cpuff;
            $add_ccheese[]= $dt[$i]->add_ccheese;
            $add_cookie[]= $dt[$i]->add_cookie;
            $add_sauce[]= $dt[$i]->add_sauce;
            $add_spicy[] =  $dt[$i]->add_spicy;
            $food_qty[]  = $dt[$i]->food_quantity;
            $prod_price[]  = $dt[$i]->prod_price;
            $code[] = $dt[$i]->code;
            $total_price[] = $dt[$i]->total_price;
            $user_name[]= $dt[$i]->user_name;
            $user_contact [] = $dt[$i]->user_contact;
            $user_address[] = $dt[$i]->user_address;
            $values[] = "('$prod_name[$i]', '$add_pearl[$i]', '$add_cpuff[$i]',  '$add_ccheese[$i]', '$add_cookie[$i]',  '$add_sauce[$i]',  '$add_spicy[$i]', '$food_qty[$i]', '$user_id[$i]', '$prod_price[$i]', '$code[$i]')";
            $val2[] = "('$code[$i]',  '$total_price[$i]', '$user_id[$i]', '$user_name[$i]', '$user_contact[$i]', '$user_address[$i]')";
        }

            //insert the data on the checkout table
        $this->sql = "INSERT INTO tbl_checkout(prod_name, add_pearl, add_cpuff, add_ccheese, add_cookie, add_sauce, add_spicy, food_quantity, user_id, prod_price, code) VALUES " . implode(', ', $values);
        //INNER JOIN
        //SELECT * FROM `tbl_checkout` INNER JOIN tbl_cocode ON tbl_checkout.code = tbl_cocode.code WHERE tbl_cocode.code = "77688857";
        try {
            if($this->pdo->query($this->sql)) {

                $this->sql = "INSERT INTO tbl_cocode (code, total_price, user_id, user_name, user_contact, user_address) VALUES $val2[0]";
           
                if($this->pdo->query($this->sql)) {

                    for ($j= 0 ; $j < sizeof($dt); $j++){
                        $cart_id[] = $dt[$j]->cart_id;
                        $this->sql = "DELETE FROM tbl_cart WHERE cart_id = '$cart_id[$j]'";
                        $this->pdo->query($this->sql);
                    }
                    return array("code"=>200, "remarks"=>"success");
                }
            }
        } catch (\PDOException $e) {
            $errmsg = $e->getMessage();
            $code = 403;
        }
        return array("code"=>$code, "errmsg"=>$errmsg);
    }

    public function checkOutCode($d)
    {
        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";

        $res = $this->gm->insert('tbl_cocode', $d);

        if($res['code']==200) {
            $code = 200;
            $payload = $res;
            $remarks = "success";
            $message = "Successfully retrieved data";
            // return $this->get->pullCart(null);
        }

        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

    // Delete Cart
    public function delCarts($d) {
        $res = $this->gm->delete('tbl_cart', $d, "cart_id = '$d->cart_id'");
        return $res;
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }

    // Delete Product
    // public function delProd($d) {
    //     $data = $d;
    //     $prod_id = $data->prod_id;
    //     $res = $this->gm->delete('tbl_food', $data, "id = '$prod_id'");
    //     if ($res['code'] == 200) {
	// 		$payload = $res['data'];
	// 		$remarks = "success";
	// 		$message = "Successfully retrieved requested data";
	// 	} else {
	// 		$payload = null;
	// 		$remarks = "failed";
	// 		$message = $res['errmsg'];
	// 	}
    // }

    public function delOrder($d) {
        $data = $d;
        $cocode = $data->cocode;
        $res = $this->gm->delete('tbl_cocode', $data, "code = '$cocode'");
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }

    // // Delete Check
    // public function delCheck($d) {
    //     $data = $d;
    //     $check_id = $data->check_id;
    //     $res = $this->gm->delete('tbl_checkout', $data, "check_id = '$check_id'");
    //     if ($res['code'] == 200) {
	// 		$payload = $res['data'];
	// 		$remarks = "success";
	// 		$message = "Successfully retrieved requested data";
	// 	} else {
	// 		$payload = null;
	// 		$remarks = "failed";
	// 		$message = $res['errmsg'];
	// 	}
    // }


    // ADMIN CODES

    // insert ADD PRODUCT Admin
    public function addProducts($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $food_Info = $data->food_Info;

        $res = $this->gm->insert('tbl_food', $food_Info);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

    public function AddOns($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $Addon_Info = $data->Addon_Info;

        $res = $this->gm->insert('tbl_addons', $Addon_Info);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

    
    public function AddSize($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $size_Info = $data->size_Info;

        $res = $this->gm->insert('tbl_size', $size_Info);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

        // Update Size
        public function updateSize($dt) {
            $code = 401;
            $payload = null;
            $remarks = "failed";
            $message = "Unable to retrieve data";
    
            $res = $this->gm->update('tbl_size', $dt, "size_id = '$dt->size_id'");
            return $res;
            if($res['code']==200) {
                $code = 200;
                $payload = $res['payload'];
                $remarks = "success";
                $message = "Successfully retrieved data";
            }
            return $this->gm->sendPayload($payload, $remarks, $message, $code);
          
        }

                // Update Addons
                public function updateAddons($dt) {
                    $code = 401;
                    $payload = null;
                    $remarks = "failed";
                    $message = "Unable to retrieve data";
            
                    $res = $this->gm->update('tbl_addons', $dt, "addon_id = '$dt->addon_id'");
                    return $res;
                    if($res['code']==200) {
                        $code = 200;
                        $payload = $res['payload'];
                        $remarks = "success";
                        $message = "Successfully retrieved data";
                    }
                    return $this->gm->sendPayload($payload, $remarks, $message, $code);
                  
                }
                
                // update Food
                public function updateFood($dt) {
                    $code = 401;
                    $payload = null;
                    $remarks = "failed";
                    $message = "Unable to retrieve data";
            
                    $res = $this->gm->update('tbl_food', $dt, "food_id = '$dt->food_id'");
                    return $res;
                    if($res['code']==200) {
                        $code = 200;
                        $payload = $res['payload'];
                        $remarks = "success";
                        $message = "Successfully retrieved data";
                    }
                    return $this->gm->sendPayload($payload, $remarks, $message, $code);
                  
                }

                // update Status
                public function updateStatus($dt) {
                    $code = 401;
                    $payload = null;
                    $remarks = "failed";
                    $message = "Unable to retrieve data";
            
                    $res = $this->gm->update('tbl_cocode', $dt, "cocode_id = '$dt->cocode_id'");
                    return $res;
                    if($res['code']==200) {
                        $code = 200;
                        $payload = $res['payload'];
                        $remarks = "success";
                        $message = "Successfully retrieved data";
                    }
                    return $this->gm->sendPayload($payload, $remarks, $message, $code);
                  
                }
                
                

    public function addCategory($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $category_Info = $data->category_Info;

        $res = $this->gm->insert('tbl_category', $category_Info);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }

    // Delete Function Admin

    public function delProd($d) {
        $data = $d;
        $food_id = $data->food_id;
        $res = $this->gm->delete('tbl_food', $data, "food_id = '$food_id'");
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }

    public function delSize($d) {
        $data = $d;
        $size_id = $data->size_id;
        $res = $this->gm->delete('tbl_size', $data, "size_id = '$size_id'");
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }

    public function delAddons($d) {
        $data = $d;
        $addon_id = $data->addon_id;
        $res = $this->gm->delete('tbl_addons', $data, "addon_id = '$addon_id'");
        if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }
    
    public function delCategory($d) {
        $data = $d;
        $category = $data->category;
        $res = $this->gm->delete('tbl_category', $data, "category_id = '$category'");
        if ($res['category_id'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
    }



}
