<?php


class Get{
    protected $gm, $pdo;

    public function __construct(\PDO $pdo) {
        $this->pdo = $pdo;
        $this->gm = new GlobalMethods($pdo);
    }

    //Pull Products
    public function pullFood ($column, $filter_data) {
		$this->sql = "SELECT * FROM tbl_$column LEFT JOIN tbl_category ON tbl_food.category_id = tbl_category.category_id WHERE food_active = 'Yes'";

		if ($filter_data != null){
			$this->sql .= " AND tbl_$column.category_id = '$filter_data'";
			// return $this->sql;
		}
	
		$res = $this->gm->generalQuery($this->sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}
	//Pull Food Per Item
	public function pullFood_perItem ($filter_data) {
		$this->sql = "SELECT * FROM tbl_food";

		if ($filter_data){
			$this->sql .= " WHERE food_id = $filter_data" ;
		}
	
		$res = $this->gm->generalQuery($this->sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}

    //Pull User
    public function pullUsers ($user_id) {

		$sql = "SELECT * FROM tbl_user WHERE user_id = '$user_id'";
		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}


		//Pull Status
		public function pullStatus ($user_id)  {

			$sql = "SELECT * FROM tbl_cocode WHERE user_id = '$user_id'";
			
			$res = $this->gm->generalQuery($sql, "No records found");
			if ($res['code'] == 200) {
				$payload = $res['data'];
				$remarks = "success";
				$message = "Successfully retrieved requested data";
			} else {
				$payload = null;
				$remarks = "failed";
				$message = $res['errmsg'];
			}
			return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
		}

    //Pull food by featured or not
    public function pullFoodFeatured ($table) {

		$sql = "SELECT * FROM $table WHERE food_featured = 'Yes'";
		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}

    //Pull Cart items
    public function pullCart ($table, $filter_data) {
	
		$this->sql = "SELECT * FROM $table LEFT JOIN tbl_user ON $table.user_id = tbl_user.user_id LEFT JOIN tbl_food ON $table.food_id = tbl_food.food_id";

		if($filter_data) {
			$this->sql .= " WHERE tbl_user.user_id = $filter_data";
		}
		
		$res = $this->gm->generalQuery($this->sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}

	public function pullCounter ($user_id) {

		$sql = "SELECT * FROM tbl_cart WHERE user_id = '$user_id'";

		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}

	// Pul check items
	public function pullCheck ($user_Id) {

		$sql = "SELECT * FROM tbl_checkout WHERE user_id = '$user_Id'";

		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}

	 //Pull History
	 public function pullHist ($user_id) {

		$sql = "SELECT * FROM tbl_history WHERE user_id = '$user_id'";

		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}


	// public function updateProfile ($user_id) {

	// 	$sql = "UPDATE tbl_user WHERE user_id = '$user_id', user_name = '$user_name', user_uname = '$user_uname', user_pword = '$user_pword', user_contact = '$user_contact', user_address = '$user_address'";

		
	// 	$res = $this->gm->generalQuery($sql, "No records found");
	// 	if ($res['code'] == 200) {
	// 		$payload = $res['data'];
	// 		$remarks = "success";
	// 		$message = "Successfully retrieved requested data";
	// 	} else {
	// 		$payload = null;
	// 		$remarks = "failed";
	// 		$message = $res['errmsg'];
	// 	}
	// 	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	// }

	// pull
	public function pullProducts ($d) {
		$sql = "SELECT * FROM tbl_products";
		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}


	public function pullCheckout ($d) {
		$sql = "SELECT * FROM tbl_checkout";
		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}


	public function pullCodeDetails($code) {

		$sql = "SELECT * FROM tbl_checkout WHERE code= '$code'";

		
		$res = $this->gm->generalQuery($sql, "No records found");
		if ($res['code'] == 200) {
			$payload = $res['data'];
			$remarks = "success";
			$message = "Successfully retrieved requested data";
		} else {
			$payload = null;
			$remarks = "failed";
			$message = $res['errmsg'];
		}
		return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
	}


	//admin

public function pullCategory ($d) {
	$sql = "SELECT * FROM tbl_category";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullAddOns ($d) {
	$sql = "SELECT * FROM tbl_addons";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullSize ($d) {
	$sql = "SELECT * FROM tbl_size";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullSizeDetails($size_id) {

	$sql = "SELECT * FROM tbl_size WHERE size_id = '$size_id'";

	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullAddonsDetails($addon_id) {

	$sql = "SELECT * FROM tbl_addons WHERE addon_id = '$addon_id'";

	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullFoodDetails($food_id) {

	$sql = "SELECT * FROM tbl_food WHERE food_id = '$food_id'";

	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}



public function pullDashboard ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (0,1,3)";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function pullHistory ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (2,4) ORDER BY cocode_id ASC";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}


// public function getFood ($d) {
// 	$sql = "SELECT * FROM `tbl_food` WHERE food_id = 1";
	
// 	$res = $this->gm->generalQuery($sql, "No records found");
// 	if ($res['code'] == 200) {
// 		$payload = $res['data'];
// 		$remarks = "success";
// 		$message = "Successfully retrieved requested data";
// 	} else {
// 		$payload = null;
// 		$remarks = "failed";
// 		$message = $res['errmsg'];
// 	}
// 	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
// }

public function adminPullFood ($d) {
	$sql = "SELECT * FROM tbl_food";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function PullUserCount ($d) {
	$sql = "SELECT * FROM tbl_user";
	
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

// Driver Functions

public function PullApproved () {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved = 1";
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

public function PullDone () {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved = 2 OR is_approved = 4";
	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

}


?>