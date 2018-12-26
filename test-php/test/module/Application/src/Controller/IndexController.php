<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\ViewModel;
use Zend\View\Model\JsonModel;
use stdClass;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        return new ViewModel();
    }



    public function getQ1Action(){
        $index = $this->params()->fromRoute('index','1');
        $startNumber = 3;
        $results =array();
        for ($i = 1; $i <= $index; $i++) {
            $startNumber = $startNumber + (2 * ($i - 1));
            array_push($results,$startNumber);

        }
       
        return new JsonModel([
            'status' => true,
            'results' => $results
        ]);
    }


    public function getQ2Action(){
     
        $results = 0;

        $results = 99 - 20 - 24;

       return new JsonModel([
            'status' => true,
            'results' =>  $results
        ]);
    }


    public function getQ3Action(){
        $index = $this->params()->fromRoute('index','1');
        $tmpObj = new stdClass();
        $tmpObj->index = 1;
        $tmpObj->value = 5;
        $results = array();
        array_push($results,$tmpObj);

        for ($i = 1; $i < $index; $i++) {
            $resultTmp = null;
            foreach($results as $struct) {
                if ($i == $struct->index) {
                    $resultTmp = $struct;
                    break;
                }
            }
            $tmp = (string)($i + 1) . (string)$resultTmp->value;
            $temp = new stdClass();
            $temp->index = $i + 1;
            $temp->value = $tmp;
            array_push($results,$temp);
        }

       return new JsonModel([
            'status' =>true,
            'results' =>  $results
        ]);
    }
}

