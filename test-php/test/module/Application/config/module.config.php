<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application;

use Zend\Router\Http\Literal;
use Zend\Router\Http\Segment;
use Zend\ServiceManager\Factory\InvokableFactory;

return [
    'router' => [
        'routes' => [
            'home' => [
                'type' => Literal::class,
                'options' => [
                    'route'    => '/',
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'application' => [
                'type'    => Segment::class,
                'options' => [
                    'route'    => '/application[/:action]',
                    'defaults' => [
                        'controller' => Controller\IndexController::class,
                        'action'     => 'index',
                    ],
                ],
            ],
            'q1' => [
                'type' =>  Literal::class,
                'options' => [
                    'route'    => '/q1',
                    'defaults' => [
                        'controller' =>  Controller\IndexController::class,
                        'action'     => 'getQ1',
                    ],
                ],
                'child_routes'=>[
                    'single' => [
                        'type' => \Zend\Router\Http\Segment::class,
                        'options' => [
                            'route'    => '/:index',
                            'defaults' => [
                                'action' => 'getQ1',
                            ],
                            'constraints' => [
                                'index' => '\d+',
                            ],
                        ],
                    ],
                ]
            ],
            'q2' => [
                'type' =>  Literal::class,
                'options' => [
                    'route'    => '/q2',
                    'defaults' => [
                        'controller' =>  Controller\IndexController::class,
                        'action'     => 'getQ2',
                    ],
                ],
            ],
            'q3' => [
                'type' =>  Literal::class,
                'options' => [
                    'route'    => '/q3',
                    'defaults' => [
                        'controller' =>  Controller\IndexController::class,
                        'action'     => 'getQ3',
                    ],
                ],
                'child_routes'=>[
                    'single' => [
                        'type' => \Zend\Router\Http\Segment::class,
                        'options' => [
                            'route'    => '/:index',
                            'defaults' => [
                                'action' => 'getQ3',
                            ],
                            'constraints' => [
                                'index' => '\d+',
                            ],
                        ],
                    ],
                ]
            ],
        ],
    ],
    'controllers' => [
        'factories' => [
            Controller\IndexController::class => InvokableFactory::class,
        ],
    ],
    'view_manager' => [
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'not_found_template'       => 'error/404',
        'exception_template'       => 'error/index',
        'template_map' => [
            'layout/layout'           => __DIR__ . '/../view/layout/layout.phtml',
            'application/index/index' => __DIR__ . '/../view/application/index/index.phtml',
            'error/404'               => __DIR__ . '/../view/error/404.phtml',
            'error/index'             => __DIR__ . '/../view/error/index.phtml',
        ],
        'template_path_stack' => [
            __DIR__ . '/../view',
        ],
        'strategies' => [
            'ViewJsonStrategy',
        ],
    ],
];
