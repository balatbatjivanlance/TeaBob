<?php


class Get{
    protected $gm, $pdo;

    public function __construct(\PDO $pdo) {
        $this->pdo = $pdo;
        $this->gm = new GlobalMethods($pdo);
    }

    //Pull Products
    public function pullFood ($column, $filter_data) {
		$this->sql = "SELECT * FROM tbl_$column LEFT JOIN tbl_category ON tbl_food.category_id = tbl_category.category_id AND tbl_food.category_name = tbl_category.category_name WHERE food_active = 'Yes'";
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

	public function pullCategory($d) {
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

public function pullOrders ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE()";
	
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

public function pullDeliveredToday ($d) {
	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE() AND is_approved IN (4) ORDER BY cocode_id DESC";
	
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

	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE() AND is_approved = 4";

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

public function ordersToday ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE()";

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

	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE() AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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

	$sql = "SELECT * FROM tbl_cocode WHERE date >= CURDATE() AND is_approved = 2";

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

	$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout 
	INNER JOIN tbl_cocode ON tbl_checkout.code = tbl_cocode.code
	 WHERE tbl_checkout.checkout_date >= CURDATE() AND tbl_cocode.is_approved != 0";


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
	$sql = "SELECT * FROM tbl_cocode WHERE (is_approved = 2 OR is_approved = 4) AND driver = '$dt->driver' ORDER BY `tbl_cocode`.`date` DESC";
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

	//MONTHS STOCKS

	public function stocksJanuary ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='January' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksFebruary ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='February' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksMarch ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='March' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksApril ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='April' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksMay ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout.checkout_date)='May' 
		AND YEAR(checkout.checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksJune ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='June' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksJuly ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='July' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksAugust ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='August' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksSeptember ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='September' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksOctober ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='October' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksNovember ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='November' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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
	public function stocksDecember ($d) {

		$sql = "SELECT tbl_checkout.*,tbl_cocode.* FROM tbl_checkout INNER JOIN tbl_cocode 
		ON tbl_checkout.code = tbl_cocode.code WHERE monthname(checkout_date)='December' 
		AND YEAR(checkout_date) = YEAR(CURDATE()) AND tbl_cocode.is_approved != 0;";
	
	
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

	// MONTHS DELIVERY

	public function deliveryJanuary ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='January' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryFebruary ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='February' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryMarch ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='March' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryApril ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='April' AND YEAR(date) = YEAR(CURDATE()) AND is_approved != 0;";
	
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

	public function deliveryMay ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='May' AND YEAR(date) = YEAR(CURDATE()) AND is_approved != 0;";
	
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
	public function deliveryJune ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='June' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryJuly ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='July' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryAugust ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='August' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliverySeptember ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='September' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryOctober ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='October' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryNovember ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='November' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	public function deliveryDecember ($d) {

		$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='December' AND YEAR(date) = YEAR(CURDATE()) AND  is_approved != 0;";
	
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
	// DRIVER DELIVERY PER MONTH
	
public function driverDeliverySnacksJanuary ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='January' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksJanuary ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='January' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksFebruary ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='February' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksFebruary ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='February' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksMarch ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='March' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksMarch ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='March' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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

public function driverDeliverySnacksApril ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='April' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksApril ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='April' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksMay ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='May' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksMay ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='May' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksJune ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='June' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksJune ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='June' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksJuly ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='July' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksJuly ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='July' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySnacksAugust ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND monthname(checkout_date)='August' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliveryDrinksAugust ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND monthname(checkout_date)='August' 
	AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function driverDeliverySeptember ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='September' AND YEAR(date) = YEAR(CURDATE()) AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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
public function driverDeliveryOctober ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='October' AND YEAR(date) = YEAR(CURDATE()) AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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
public function driverDeliveryNovember ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='November' AND YEAR(date) = YEAR(CURDATE()) AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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
public function driverDeliveryDecember ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE monthname(date)='December' AND YEAR(date) = YEAR(CURDATE()) AND is_approved = 4 AND driver = 'Jivan Balatbat' ";

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

public function deliveryCurrentYear ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE YEAR(date) = YEAR(CURDATE()) AND is_approved = 4;";

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
		
public function DeliverySnacksCurrentYear ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND YEAR(checkout_date) = YEAR(CURDATE())";

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
public function DeliveryDrinksCurrentYear ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND YEAR(checkout_date) = YEAR(CURDATE())";

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


public function deliveryCurrentMonth ($d) {

	$sql = "SELECT * FROM tbl_cocode WHERE MONTH(date) = MONTH(CURDATE()) AND is_approved = 4;";

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
		
public function DeliverySnacksCurrentMonth ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Snacks' AND MONTH(checkout_date) = MONTH(CURDATE())";

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
public function DeliveryDrinksCurrentMonth ($d) {

	$sql = "SELECT * FROM tbl_checkout WHERE category_name = 'Drinks' AND MONTH(checkout_date) = MONTH(CURDATE())";

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