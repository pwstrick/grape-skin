<?php
$p = (int)$_REQUEST['p'];
if($p <= 5) {
	$data = array(
		'list' => array(
			array(
				'status'=>'取消', 
				'order_url' => '322',
				'order_no' =>'3221233', 
				'product_name'=>'来个熊抱- XOXO系列(永生花) x 1', 
				'product_url'=>123,
				'amount' => '¥ 599.00',
				'date' => '2月11日 18:37'
			),
			array(
				'status'=>'正常',
				'order_url' => '123',
				'order_no' =>'3221233', 
				'product_name'=>'来个熊抱- XOXO系列(永生花) x 1', 
				'product_url'=>123,
				'amount' => '¥ 599.00',
				'date' => '2月11日 18:37'
			)
		),
		'page' => array(
			'total' => 12322,
			'numbers' => array(1,2,3,4,5,6,7,8),
			'last' => 1,//当为0的时候就是不可点击
			'next' => 9,
			'current' => 5
		)
	);
}else {
	$data = array(
		'list' => array(
			array(
				'status'=>'取消1', 
				'order_url' => '3221',
				'order_no' =>'32212331', 
				'product_name'=>'来个熊抱- XOXO系列(永生花) x 11', 
				'product_url'=>1231,
				'amount' => '¥ 599.001',
				'date' => '2月11日 18:31'
			),
			array(
				'status'=>'正常1',
				'order_url' => '1231',
				'order_no' =>'3221233', 
				'product_name'=>'来个熊抱- XOXO系列(永生花) x 1', 
				'product_url'=>123,
				'amount' => '¥ 599.00',
				'date' => '2月11日 18:37'
			)
		),
		'page' => array(
			'total' => 12322,
			'numbers' => array(2,3,4,5,6,7,8,9),
			'last' => 1,//当为0的时候就是不可点击
			'next' => 9,
			'current' => 6
		)
	);
}
$result = array(
	'msg' => '获取成功！',
	'result' => '1',
	'data' => $data
);
echo json_encode($result);