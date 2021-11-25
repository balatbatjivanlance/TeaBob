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
    public function addProduct($data) {

        $code = 401;
        $payload = null;
        $remarks = "failed";
        $message = "Unable to retrieve data";
        $prodInfo = $data->prodInfo;

        $res = $this->gm->insert('tbl_products', $prodInfo);

        if($res['code']==200) {
            $code = 200;
            $payload = $res['data'];
            $remarks = "success";
            $message = "Successfully retrieved data";
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
    }
    
		// Update Profile
		
		

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
            return $this->get->pullCart(null);
        }
        return $this->gm->sendPayload($payload, $remarks, $message, $code);
      
    }
    
    // public function updateProfile($data) {

    //     $code = 401;
    //     $payload = null;
    //     $remarks = "failed";
    //     $message = "Unable to retrieve data";
    //     $userInfo = $data->userInfo;

    //     $res = $this->gm->update('tbl_user', $userInfo);

    //     if($res['code']==200) {
    //         $code = 200;
    //         $payload = $res['data'];
    //         $remarks = "success";
    //         $message = "Successfully retrieved data";
    //         return $this->get->updateProfile(null);
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
    public function delProd($d) {
        $data = $d;
        $prod_id = $data->prod_id;
        $res = $this->gm->delete('tbl_food', $data, "id = '$prod_id'");
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
}
