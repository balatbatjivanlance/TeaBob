<?php 
	require_once("./config/Config.php");

	$db = new Connection();
	$pdo = $db->connect();
	$gm = new GlobalMethods($pdo);
	$post = new Post($pdo);
	$get = new Get($pdo);
	$auth = new Auth($pdo);

	if (isset($_REQUEST['request'])) {
		$req = explode('/', rtrim($_REQUEST['request'], '/'));
	} else {
		$req = array("errorcatcher");
	}

	switch($_SERVER['REQUEST_METHOD']) {
		case 'POST':

			switch($req[0]) {
				// PULL DATA OF products table
				case 'food':
					if(count($req)>1) {
						echo json_encode($get->pullFood($req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullFood(null), JSON_PRETTY_PRINT);
					}
				break;
				case 'checkout':
					if(count($req)>1) {
						echo json_encode($get->pullCheckout($req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCheckout(null), JSON_PRETTY_PRINT);
					}
				break;


				
				case 'verified':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->verified($d), JSON_PRETTY_PRINT);    

				break;


				case 'denied':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->verified($d), JSON_PRETTY_PRINT);    

				break;

				case 'product':
					if(count($req)>1) {
						echo json_encode($get->pullProduct($req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullProduct(null), JSON_PRETTY_PRINT);
					}
				break;
				// Pull data of the status 
				case 'status':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
                       
						echo json_encode($get->pullStatus($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullStatus($d), JSON_PRETTY_PRINT);
					}
				break;
				// Pull data of the users 
				case 'users':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
                       
						echo json_encode($get->pullUsers($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullUsers($d), JSON_PRETTY_PRINT);
					}
				break;
				// Pull cart items function
				case 'cart':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
                       
						echo json_encode($get->pullCart($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCart($d), JSON_PRETTY_PRINT);
					}
                break;
				// Pull hist items function
				case 'hist':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
                       
						echo json_encode($get->pullHist($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullHist($d), JSON_PRETTY_PRINT);
					}
                break;
				// Checkout function
				case 'check':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
                       
						echo json_encode($get->pullCheck($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCheck($d), JSON_PRETTY_PRINT);
					}
                break;
				// Add Products function
				case 'addProduct':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_products",$d), JSON_PRETTY_PRINT);
				break;
				// Add to cart function
				case 'addCart':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_cart",$d), JSON_PRETTY_PRINT);
				break;
				// Add to checkout function
				case 'addCheck':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_checkout",$d), JSON_PRETTY_PRINT);
				break;
				case 'checkOutAll':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->checkOutAll($d), JSON_PRETTY_PRINT);

				break;
				case 'checkOutCode':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->checkOutCode($d), JSON_PRETTY_PRINT);

				break;
				// Add to history
				case 'addHist':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_history",$d), JSON_PRETTY_PRINT);
				break;
				// Delete Existing Product
				case 'delProd':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delProd($d), JSON_PRETTY_PRINT);
				break;
				// Delete cart items
				case 'delCarts':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCarts($d), JSON_PRETTY_PRINT);
				break;
				// Delete check items
				case 'delCheck':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCheck($d), JSON_PRETTY_PRINT);
				break;
				// Register User function 
				case 'regUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->regUser($d), JSON_PRETTY_PRINT);
				break;
				// Login User function
				case 'loginUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->loginUser($d), JSON_PRETTY_PRINT);
				break;
			
			}
		break;

		case 'GET':
			switch ($req[0]) {

				default:
				http_response_code(400);
				echo "Bad Request";
				break;
			}
		break;

		default:
			http_response_code(403);
			echo "Please contact the Systems Administrator";
		break;
	}
?>