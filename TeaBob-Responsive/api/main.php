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
						echo json_encode($get->pullFood($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullFood($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'products':
					if(count($req)>1) {
						echo json_encode($get->pullProducts($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullProducts($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'foodfeatured':
					if(count($req)>1) {
						echo json_encode($get->pullFoodFeatured('tbl_food', $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullFoodFeatured('tbl_food', null), JSON_PRETTY_PRINT);
					}
				break;
				// case 'foodactive':
				// 	if(count($req)>1) {
				// 		echo json_encode($get->pullFoodActive($req[0], $req[1]), JSON_PRETTY_PRINT);
				// 	} else {
				// 		echo json_encode($get->pullFoodActive($req[0], null), JSON_PRETTY_PRINT);
				// 	}
				// break;
				case 'food_item':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->pullFood_perItem($d), JSON_PRETTY_PRINT);
				break;
				case 'checkout':
					if(count($req)>1) {
						echo json_encode($get->pullCheckout($req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCheckout(null), JSON_PRETTY_PRINT);
					}
				break;

				case 'category':
					if($req[0]) {
						echo json_encode($get->pullCategory($req[0]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCategory(null), JSON_PRETTY_PRINT);
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
					if(count($req)>1) {
						echo json_encode($get->pullCart('tbl_'.$req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCart('tbl_'.$req[0], null), JSON_PRETTY_PRINT);
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
					echo json_encode($gm->insert("tbl_cart", $d), JSON_PRETTY_PRINT);
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
				case 'placeOrder':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->placeOrder($d), JSON_PRETTY_PRINT);

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
				case 'delOrder':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delOrder($d), JSON_PRETTY_PRINT);
				break;
				// Delete cart items
				case 'delCarts':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->delCarts($d), JSON_PRETTY_PRINT);
				break;
				// Delete check items
				// case 'delCheck':
				// 	$d = json_decode(base64_decode(file_get_contents("php://input")));
				// 	echo json_encode($post->delCheck($d), JSON_PRETTY_PRINT);
				// break;
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

				//  Update Profile in status page
				case 'updateProfile':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->updateProfile($d), JSON_PRETTY_PRINT);
				break;
					// remove addons
				case 'removeAddOns':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->updateCart($d), JSON_PRETTY_PRINT);
				break;
				//  Update status
				case 'updateStatus':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->updateStatus($d), JSON_PRETTY_PRINT);
				break;
				case 'counter':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					if(count($req)>1) {
					   
						echo json_encode($get->pullCounter($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullCounter($d), JSON_PRETTY_PRINT);
					}
				break;
				case 'pullCodeDetails':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($get->pullCodeDetails($d), JSON_PRETTY_PRINT);    
				break;
				case 'pullCoCodeDetails':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($get->pullCoCodeDetails($d), JSON_PRETTY_PRINT);    
				break;



				// NEW ADMIN CODES


					// Add Products function Admin
					case 'addProducts':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($gm->insert("tbl_food",$d), JSON_PRETTY_PRINT);
					break;
					case 'AddOns':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($gm->insert("tbl_addons",$d), JSON_PRETTY_PRINT);
					break;
					case 'AddSize':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($gm->insert("tbl_size",$d), JSON_PRETTY_PRINT);
					break;
					case 'addCategory':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($gm->insert("tbl_category",$d), JSON_PRETTY_PRINT);
					break;

						//  Update Size and Addons
					case 'updateSize':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateSize($d), JSON_PRETTY_PRINT);
					break;
					case 'updateAddons':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateAddons($d), JSON_PRETTY_PRINT);
					break;
					case 'updateFood':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateFood($d), JSON_PRETTY_PRINT);
					break;
					

					// Pull Functions Admin


					case 'pullAddOns':
						if(count($req)>1) {
							echo json_encode($get->pullAddOns($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullAddOns($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'pullSize':
						if(count($req)>1) {
							echo json_encode($get->pullSize($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullSize($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					
					case 'pullSizeDetails':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->pullSizeDetails($d), JSON_PRETTY_PRINT);    
					break;
					case 'pullAddonsDetails':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->pullAddonsDetails($d), JSON_PRETTY_PRINT);    
					break;
					case 'pullFoodDetails':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->pullFoodDetails($d), JSON_PRETTY_PRINT);    
					break;

					case 'category':
						if(count($req)>1) {
							echo json_encode($get->pullCategory($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullCategory($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'dashboard':
						if(count($req)>1) {
							echo json_encode($get->pullDashboard($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullDashboard($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'adminfood':
						if(count($req)>1) {
							echo json_encode($get->adminPullFood($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->adminPullFood($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'usercount':
						if(count($req)>1) {
							echo json_encode($get->PullUserCount($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->PullUserCount($req[0], null), JSON_PRETTY_PRINT);
						}
					break;

					// Delete Functions Admin


					case 'delCategory':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->delCategory($d), JSON_PRETTY_PRINT);
					break;
					case 'delSize':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->delSize($d), JSON_PRETTY_PRINT);
					break;
					case 'delAddons':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->delAddons($d), JSON_PRETTY_PRINT);
					break;

					// case 'updatefood':
					// 	if(count($req)>1) {
					// 		echo json_encode($get->updateFood($req[0], $req[1]), JSON_PRETTY_PRINT);
					// 	} else {
					// 		echo json_encode($get->updateFood($req[0], null), JSON_PRETTY_PRINT);
					// 	}
					// break;


					//NEW DRIVER CODES
					case 'getApproved':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->PullApproved(), JSON_PRETTY_PRINT);    
					break;

					case 'getDone':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->PullDone(), JSON_PRETTY_PRINT);    
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