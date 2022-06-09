<?php 
	require_once("./config/Config.php");
	require_once("./models/mail.php");

	$db = new Connection();
	$pdo = $db->connect();
	$gm = new GlobalMethods($pdo);
	$post = new Post($pdo);
	$get = new Get($pdo);
	$auth = new Auth($pdo);
	$mail = new Mailer($pdo);

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

				case 'orders':
					if($req[0]) {
						echo json_encode($get->pullOrders($req[0]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullOrders(null), JSON_PRETTY_PRINT);
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

				case 'user':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
						echo json_encode($get->pullUser1($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullUser1($d), JSON_PRETTY_PRINT);
					}
				break;

				// Pull comments
				case 'comment':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($get->pullComment($d), JSON_PRETTY_PRINT);
				break;
				// case 'comment':
				// 	$d = json_decode(base64_decode(file_get_contents("php://input")));
                //     if(count($req)>1) {
				// 		echo json_encode($get->pullComment($d), JSON_PRETTY_PRINT);
				// 	} else {
				// 		echo json_encode($get->pullComment($d), JSON_PRETTY_PRINT);
				// 	}
				// break;
				// Pull data of the user admin
				case 'pullUserAdmin':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
                    if(count($req)>1) {
						echo json_encode($get->pullUserAdmin($d), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullUserAdmin($d), JSON_PRETTY_PRINT);
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
				// Add to check out one item
				case 'CheckoutOneItem':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_checkout", $d), JSON_PRETTY_PRINT);
				break;
				case 'CheckoutCodeOneItem':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_cocode", $d), JSON_PRETTY_PRINT);
				break;
				// update food stocks
				case 'UpdateStocksOneItem':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->UpdateStocksOneItem($d), JSON_PRETTY_PRINT);
				break;
				
				// Add to checkout function
				case 'addCheck':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_checkout",$d), JSON_PRETTY_PRINT);
				break;
				// case 'checkOutAll':
				// 	$d = json_decode(base64_decode(file_get_contents("php://input")));
				// 	echo json_encode($post->checkOutAll($d), JSON_PRETTY_PRINT);

				// break;
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
				//  Change password User/Admin
				case 'ChangePassword':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->ChangePassword($d), JSON_PRETTY_PRINT);    

				break;
				//  Change password Driver
				case 'ChangePassDriver':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($auth->ChangePassDriver($d), JSON_PRETTY_PRINT);    

				break;

				case 'verifyUser':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->verifyUser($d), JSON_PRETTY_PRINT);
				break;
					// remove addons
				case 'removeAddOns':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->updateCart($d), JSON_PRETTY_PRINT);
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

				//user side codes
				case 'pullAddOnsSnacks':
					if(count($req)>1) {
						echo json_encode($get->pullAddOnsSnacks($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAddOnsSnacks($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'pullAddOnsDrinks':
					if(count($req)>1) {
						echo json_encode($get->pullAddOnsDrinks($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
						echo json_encode($get->pullAddOnsDrinks($req[0], null), JSON_PRETTY_PRINT);
					}
				break;

				case 'mailer':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					print_r($mail->mailer($d));
				break;

				// Add Comment
				case 'AddComment':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($gm->insert("tbl_comment",$d), JSON_PRETTY_PRINT);
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
					case 'addComment':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->addComment($d), JSON_PRETTY_PRINT);
					break;
					case 'updateAddons':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateAddons($d), JSON_PRETTY_PRINT);
					break;
					case 'updateFood':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateFood($d), JSON_PRETTY_PRINT);
					break;
					case 'updateStatus':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateStatus($d), JSON_PRETTY_PRINT);
					break;

					case 'updateDriverStatus':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->updateDriverStatus($d), JSON_PRETTY_PRINT);
					break;
					//  cancel Order
					case 'cancelOrder':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->cancelOrder($d), JSON_PRETTY_PRINT);
					break;
					//  delete Order
					case 'deleteOrder':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->deleteOrder($d), JSON_PRETTY_PRINT);
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

					case 'deliveryToday':
						
						$d = json_decode(base64_decode(file_get_contents("php://input"))); 
						echo json_encode($get->deliveryToday($d), JSON_PRETTY_PRINT);	
						// if(count($req)>1) {
							
						// 	echo json_encode($get->deliveryToday($req[0], $req[1]), JSON_PRETTY_PRINT);
						// } else {
						
						// 	echo json_encode($get->deliveryToday($req[0], null), JSON_PRETTY_PRINT);
						// }
					break;

						case 'ordersToday':
							if(count($req)>1) {
								
								echo json_encode($get->ordersToday($req[0], $req[1]), JSON_PRETTY_PRINT);
							} else {
							
								echo json_encode($get->ordersToday($req[0], null), JSON_PRETTY_PRINT);
							}
							break;

						case 'cancelledToday':
							if(count($req)>1) {
								
								echo json_encode($get->cancelledToday($req[0], $req[1]), JSON_PRETTY_PRINT);
							} else {
							
								echo json_encode($get->cancelledToday($req[0], null), JSON_PRETTY_PRINT);
							}
							break;

							case 'stocksToday':
								$d = json_decode(base64_decode(file_get_contents("php://input"))); 
								echo json_encode($get->stocksToday($d), JSON_PRETTY_PRINT);	
								// if(count($req)>1) {
									
								// 	echo json_encode($get->stocksToday($req[0], $req[1]), JSON_PRETTY_PRINT);
								// } else {
								
								// 	echo json_encode($get->stocksToday($req[0], null), JSON_PRETTY_PRINT);
								// }
								break;

							case 'profitToday':
									if(count($req)>1) {
										
										echo json_encode($get->profitToday($req[0], $req[1]), JSON_PRETTY_PRINT);
									} else {
									
										echo json_encode($get->profitToday($req[0], null), JSON_PRETTY_PRINT);
									}
									break;
					

					case 'pullHistory':
						if(count($req)>1) {
							echo json_encode($get->pullHistory($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullHistory($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'pending':
						if(count($req)>1) {
							echo json_encode($get->pullPending($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullPending($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'approved':
						if(count($req)>1) {
							echo json_encode($get->pullApprovedOrders($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullApprovedOrders($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'ondelivery':
						if(count($req)>1) {
							echo json_encode($get->pullOndelivery($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullOndelivery($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'delivered':
						if(count($req)>1) {
							echo json_encode($get->pullDelivered($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullDelivered($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'deliveredToday':
						if(count($req)>1) {
							echo json_encode($get->pullDeliveredToday($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullDeliveredToday($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'pullSales':
						if(count($req)>1) {
							echo json_encode($get->pullSales($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullSales($req[0], null), JSON_PRETTY_PRINT);
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
					//driver
					case 'pullDriver':
						if(count($req)>1) {
							echo json_encode($get->pullDriver($req[0], $req[1]), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullDriver($req[0], null), JSON_PRETTY_PRINT);
						}
					break;
					case 'pullDriverUpdate':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						if(count($req)>1) {
							echo json_encode($get->pullDriverUpdate($d), JSON_PRETTY_PRINT);
						} else {
							echo json_encode($get->pullDriverUpdate($d), JSON_PRETTY_PRINT);
						}
					break;
					//  Update Driver Profile
				case 'UpdateDriver':
					$d = json_decode(base64_decode(file_get_contents("php://input")));
					echo json_encode($post->UpdateDriver($d), JSON_PRETTY_PRINT);
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
					case 'delDriver':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->delDriver($d), JSON_PRETTY_PRINT);
					break;
					case 'delAdmin':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->delAdmin($d), JSON_PRETTY_PRINT);
					break;

					//NEW DRIVER CODES
					case 'getApproved':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->PullApproved(), JSON_PRETTY_PRINT);    
					break;

					case 'getDone':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->PullDone($d), JSON_PRETTY_PRINT);    
					break;

					case 'getDriver': // login driver side
						$d = json_decode(base64_decode(file_get_contents("php://input"))); 
						echo json_encode($auth->loginDriver($d), JSON_PRETTY_PRINT);    
					break;

					case 'registerDriver':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($auth->registerDriver($d), JSON_PRETTY_PRINT);
					break;

					case 'acceptOrder': //for accepting order on view-order page
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->acceptOrder($d), JSON_PRETTY_PRINT);
					break;

					case 'confirmDelivery': //for confirming delivery on conclude-order page
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->confirmDelivery($d), JSON_PRETTY_PRINT);
					break;

					case 'cancelDelivery': //for confirming delivery on conclude-order page
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($post->cancelDelivery($d), JSON_PRETTY_PRINT);
					break;

					case 'getDriverInfo':
						$d = json_decode(base64_decode(file_get_contents("php://input")));
						echo json_encode($get->PullDriverInfo($d), JSON_PRETTY_PRINT);    
					break;
					case 'driverDeliveryToday':
						
						$d = json_decode(base64_decode(file_get_contents("php://input"))); 
						echo json_encode($get->driverDeliveryToday($d), JSON_PRETTY_PRINT);	
						// if(count($req)>1) {
							
						// 	echo json_encode($get->driverDeliveryToday($req[0], $req[1]), JSON_PRETTY_PRINT);
						// } else {
						
						// 	echo json_encode($get->driverDeliveryToday($req[0], null), JSON_PRETTY_PRINT);
						// }
						break;
				// MONTHS STOCKS
				case 'stocksJanuary':
					if(count($req)>1) {
						
						echo json_encode($get->stocksJanuary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksJanuary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksFebruary':
					if(count($req)>1) {
						
						echo json_encode($get->stocksFebruary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksFebruary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksMarch':
					if(count($req)>1) {
						
						echo json_encode($get->stocksMarch($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksMarch($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'stocksApril':
					if(count($req)>1) {
						
						echo json_encode($get->stocksApril($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksApril($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksMay':
					if(count($req)>1) {
						
						echo json_encode($get->stocksMay($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksMay($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksJune':
					if(count($req)>1) {
						
						echo json_encode($get->stocksJune($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksJune($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksJuly':
					if(count($req)>1) {
						
						echo json_encode($get->stocksJuly($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksJuly($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksAugust':
					if(count($req)>1) {
						
						echo json_encode($get->stocksAugust($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksAugust($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksSeptember':
					if(count($req)>1) {
						
						echo json_encode($get->stocksSeptember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksSeptember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksOctober':
					if(count($req)>1) {
						
						echo json_encode($get->stocksOctober($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksOctober($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksNovember':
					if(count($req)>1) {
						
						echo json_encode($get->stocksNovember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksNovember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksDecember':
					if(count($req)>1) {
						
						echo json_encode($get->stocksDecember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksDecember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'stocksCurrentMonth':
					if(count($req)>1) {
						
						echo json_encode($get->stocksCurrentMonth($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksCurrentMonth($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				// MONTHS DELIVERY
				case 'deliveryCurrentMonth':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryCurrentMonth($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryCurrentMonth($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryCurrentMonth':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryCurrentMonth($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryCurrentMonth($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryJanuary':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryJanuary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryJanuary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryJanuary':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryJanuary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryJanuary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryFebruary':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryFebruary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryFebruary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryFebruary':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryFebruary($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryFebruary($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryMarch':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryMarch($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryMarch($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryMarch':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryMarch($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryMarch($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryApril':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryApril($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryApril($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryApril':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryApril($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryApril($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryMay':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryMay($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryMay($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryMay':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryMay($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryMay($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryJune':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryJune($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryJune($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryJune':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryJune($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryJune($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryJuly':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryJuly($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryJuly($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryJuly':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryJuly($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryJuly($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryAugust':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryAugust($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryAugust($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryAugust':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryAugust($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryAugust($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliverySeptember':
					if(count($req)>1) {
						
						echo json_encode($get->deliverySeptember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliverySeptember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliverySeptember':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliverySeptember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliverySeptember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryOctober':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryOctober($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryOctober($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryOctober':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryOctober($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryOctober($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryNovember':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryNovember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryNovember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryNovember':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryNovember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryNovember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'deliveryDecember':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryDecember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryDecember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryDecember':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryDecember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryDecember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				//YEARLY 
				
				case 'stocksCurrentYear':
					if(count($req)>1) {
						
						echo json_encode($get->stocksCurrentYear($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksCurrentYear($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDeliveryCurrentYear':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryCurrentYear($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryCurrentYear($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'deliveryCurrentYear':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryCurrentYear($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryCurrentYear($req[0], null), JSON_PRETTY_PRINT);
					}
				break;

				
				case 'deliveryDecember':
					if(count($req)>1) {
						
						echo json_encode($get->deliveryDecember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->deliveryDecember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'driverDeliveryDecember':
					if(count($req)>1) {
						
						echo json_encode($get->driverDeliveryDecember($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDeliveryDecember($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				//YEARLY 
				
				case 'Stocks2022':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2022($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2022($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2022':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2022($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2022($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2022':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2022($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2022($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'Stocks2023':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2023($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2023($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2023':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2023($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2023($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2023':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2023($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2023($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'Stocks2024':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2024($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2024($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2024':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2024($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2024($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2024':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2024($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2024($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'Stocks2025':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2025($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2025($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2025':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2025($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2025($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2025':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2025($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2025($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'Stocks2026':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2026($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2026($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2026':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2026($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2026($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2026':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2026($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2026($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				case 'Stocks2027':
					if(count($req)>1) {
						
						echo json_encode($get->Stocks2027($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Stocks2027($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'driverDelivery2027':
					if(count($req)>1) {
						
						echo json_encode($get->driverDelivery2027($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->driverDelivery2027($req[0], null), JSON_PRETTY_PRINT);
					}
				break;
				
				case 'Delivery2027':
					if(count($req)>1) {
						
						echo json_encode($get->Delivery2027($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->Delivery2027($req[0], null), JSON_PRETTY_PRINT);
					}
				break;

				//datepicker
				
				case 'stocksDaily':
					$d = json_decode(base64_decode(file_get_contents("php://input"))); 
					echo json_encode($get->stocksDaily($d), JSON_PRETTY_PRINT);		
				break;

				// case 'stocksDaily':
				// 	$d = json_decode(base64_decode(file_get_contents("php://input")));
				// 	echo json_encode($get->stocksDaily($d), JSON_PRETTY_PRINT);
				// break;

				case 'stocksDaily2':
					if(count($req)>1) {
						
						echo json_encode($get->stocksDaily2($req[0], $req[1]), JSON_PRETTY_PRINT);
					} else {
					
						echo json_encode($get->stocksDaily2($req[0], null), JSON_PRETTY_PRINT);
					}
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