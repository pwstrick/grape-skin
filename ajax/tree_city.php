<?php
$result = array(
	'msg' => '获取成功！',
	'result' => '1',
	'data' => array(
		array('id'=>1, 'pId'=>0, 'name'=>"上海市"),
		array('id'=>11, 'pId'=>1, 'name'=>"市辖区"),
		array('id'=>111, 'pId'=>11, 'name'=>"松江区"),
		array('id'=>112, 'pId'=>11, 'name'=>"青浦区"),
		array('id'=>12, 'pId'=>1, 'name'=>"县"),
		array('id'=>121, 'pId'=>12, 'name'=>"崇明县"),
		array('id'=>122, 'pId'=>12, 'name'=>"火星县"),
		array('id'=>2, 'pId'=>0, 'name'=>"广东省"),
		array('id'=>21, 'pId'=>2, 'name'=>"广州市"),
		array('id'=>22, 'pId'=>2, 'name'=>"深圳市"),
		array('id'=>221, 'pId'=>22, 'name'=>"东山区"),
		array('id'=>222, 'pId'=>22, 'name'=>"荔枝湾"),
		array('id'=>23, 'pId'=>2, 'name'=>"江门市")
	)//额外附加值
);
echo json_encode($result);