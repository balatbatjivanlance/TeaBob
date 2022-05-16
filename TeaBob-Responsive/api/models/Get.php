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
		//  AND food_stocks != (0) 

		if ($filter_data != null){
			$this->sql .= " AND tbl_$column.category_id = '$filter_data'";
	
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

	    //Pull Comments
		public function pullComment ($filter_data) {
			$this->sql = "SELECT * FROM tbl_comment";
	
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
		// public function pullComment ($com_id) {
		// 	$sql = "SELECT * FROM tbl_comment";
			
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


		//Pull Status
		public function pullStatus ($user_id)  {

			$sql = "SELECT * FROM tbl_cocode WHERE user_id = '$user_id'AND  is_approved IN (0,1,2,3,4,6) ORDER BY cocode_id DESC";
			
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
	
		$this->sql = "SELECT * FROM $table LEFT JOIN tbl_user 
		ON $table.user_id = tbl_user.user_id LEFT JOIN tbl_food ON $table.food_id = tbl_food.food_id
		LEFT JOIN tbl_size ON $table.size_id = tbl_size.size_id";
		
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

	public function pullAddOnsSnacks ($d) {
		$sql = "SELECT * FROM tbl_addons WHERE category_id = '24'";
		
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
	public function pullAddOnsDrinks ($d) {
		$sql = "SELECT * FROM tbl_addons WHERE category_id = '26'";
		
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

//Dashboard Pulls

public function pullPending ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (0) ORDER BY cocode_id DESC";
	
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

public function pullApprovedOrders ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (1) ORDER BY cocode_id DESC";
	
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

public function pullOndelivery ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (3) ORDER BY cocode_id DESC";
	
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

public function pullDelivered ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (4) ORDER BY cocode_id DESC";
	
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

public function pullSales ($d) {
	$sql = "SELECT SUM(total_price)AS total_price FROM tbl_cocode WHERE is_approved=4";
	
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

public function deliveryToday ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE last_updated >= CURDATE() AND is_approved = 4";

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

public function driverDelivery ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE last_updated >= CURDATE() AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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

public function cancelledToday ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE last_updated >= CURDATE() AND is_approved = 2";

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

public function stocksToday ($d) {

	$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode ON tbl_checkout.code = tbl_cocode.code WHERE tbl_checkout.checkout_date >= CURDATE() AND tbl_cocode.is_approved != 0";


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

public function profitToday ($d) {
	
	$sql = "SELECT * FROM tbl_checkout WHERE checkout_date >= CURDATE()";

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

	$sql = "SELECT * FROM tbl_cocode WHERE is_approved IN (2,4,5,6) ORDER BY cocode_id DESC";
	
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

public function pullDriver ($d) {

	$sql = "SELECT * FROM tbl_driver";
	
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
public function pullDriverUpdate ($driver_id) {

	$sql = "SELECT * FROM tbl_driver WHERE driver_id = '$driver_id'";
	
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

public function pullUser1 ($d) {

	$sql = "SELECT * FROM tbl_user WHERE user_role = 1";
	
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
	$sql = "SELECT * FROM tbl_user WHERE user_role = 1";
	
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

public function pullUserAdmin ($d) {
	$sql = "SELECT * FROM tbl_user WHERE user_role = 0";
	
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
	$sql = "SELECT * FROM tbl_cocode WHERE is_approved = 1 ORDER BY cocode_id DESC";
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

public function PullDone ($dt) {
	$sql = "SELECT * FROM tbl_cocode WHERE (is_approved = 2 OR is_approved = 4) AND driver = '$dt->driver' ORDER BY `tbl_cocode`.`last_updated` DESC";
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

public function PullDriverInfo($dt) {
	
	$sql = "SELECT * FROM tbl_cocode WHERE driver = '$dt->driver' AND is_approved = 4";

	$res = $this->gm->generalQuery($sql, "No records found");
	if ($res['code'] == 200) {
		$payload = $res['data'];
		$remarks = "success";
		$message = "Successfully retrieved requested data";
	} else {
		$res['code'] = 200;
		$payload = null;
		$remarks = "failed";
		$message = $res['errmsg'];
	}
	return $this->gm->sendPayload($payload, $remarks, $message, $res['code']);
}

}


?>