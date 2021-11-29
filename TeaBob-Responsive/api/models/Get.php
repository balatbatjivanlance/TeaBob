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

		if ($filter_data){
			$this->sql .= " AND tbl_$column.category_id = $filter_data";
			return $this->sql;
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
	
	//PULL CATEGORIES
	public function pullCategory ($column) {
		$sql = "SELECT * FROM tbl_$column";
	
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

    //Pull food by featured or not
    public function pullFoodFeatured ($table) {

		$sql = "SELECT * FROM $table WHERE food_featured = 'Yes'";
		return $sql;
		
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
    public function pullCart ($column, $filter_data) {
	
		$this->sql = "SELECT * FROM tbl_$column";

		if($filter_data != null){
			$this->sql .= "WHERE user_id = '$filter_data'";
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

		//Pull Status
		public function pullStatus ($table, $user_id) {

			$sql = "SELECT $table.* FROM $table";

			if($user_id){
				$sql .= " WHERE user_id = '$user_id'";
			}
			
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
	public function pullProduct ($d) {
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
		$sql = "SELECT * FROM tbl_co_code";
		
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