<?php
$result = array(
	'msg' => '获取成功！',
	'result' => '1',
	'data' => array(
		array('id'=>1, 'pId'=>0, 'name'=>"随意勾选 1", 'open'=>true),
		array('id'=>11, 'pId'=>1, 'name'=>"随意勾选 1-1", 'open'=>true),
		array('id'=>111, 'pId'=>11, 'name'=>"随意勾选 1-1-1"),
		array('id'=>112, 'pId'=>11, 'name'=>"随意勾选 1-1-2"),
		array('id'=>12, 'pId'=>1, 'name'=>"随意勾选 1-2", 'open'=>true),
		array('id'=>121, 'pId'=>12, 'name'=>"随意勾选 1-2-1"),
		array('id'=>122, 'pId'=>12, 'name'=>"随意勾选 1-2-2"),
		array('id'=>2, 'pId'=>0, 'name'=>"随意勾选 2", 'open'=>true),
		array('id'=>21, 'pId'=>2, 'name'=>"随意勾选 2-1"),
		array('id'=>22, 'pId'=>2, 'name'=>"随意勾选 2-2", 'open'=>true),
		array('id'=>221, 'pId'=>22, 'name'=>"随意勾选 2-2-1"),
		array('id'=>222, 'pId'=>22, 'name'=>"随意勾选 2-2-2"),
		array('id'=>23, 'pId'=>2, 'name'=>"随意勾选 2-3")
	)//额外附加值
);
echo json_encode($result);