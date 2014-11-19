<?php
header('Content-Type: application/json');
$data = array();
foreach(file('data.txt') as $line) {
	$data['s1'][] = explode(',', $line)[0]; 
	$data['s2'][] = explode(',', $line)[1]; 
	$data['s3'][] = explode(',', $line)[2]; 
}
echo json_encode($data);
//print_r($data);