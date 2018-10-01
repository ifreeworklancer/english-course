<?php require_once(__DIR__ . '/../../store.php'); ?>

<!doctype html>
<html lang="ru_RU">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        <?= $app_title ?>
    </title>

    <link rel="stylesheet" href="../../fonts/font.css">
    <link rel="stylesheet" href="../../dist/app.css">
</head>

<body>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="search-icon" viewBox="0 0 488.4 488.4">
            <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z" />
        </symbol>
        <symbol id="user-icon" viewBox="-42 0 512 512.002">
            <path d="m210.351562 246.632812c33.882813 0 63.222657-12.152343 87.195313-36.128906 23.972656-23.972656 36.125-53.304687 36.125-87.191406 0-33.875-12.152344-63.210938-36.128906-87.191406-23.976563-23.96875-53.3125-36.121094-87.191407-36.121094-33.886718 0-63.21875 12.152344-87.191406 36.125s-36.128906 53.308594-36.128906 87.1875c0 33.886719 12.15625 63.222656 36.132812 87.195312 23.976563 23.96875 53.3125 36.125 87.1875 36.125zm0 0" />
            <path d="m426.128906 393.703125c-.691406-9.976563-2.089844-20.859375-4.148437-32.351563-2.078125-11.578124-4.753907-22.523437-7.957031-32.527343-3.308594-10.339844-7.808594-20.550781-13.371094-30.335938-5.773438-10.15625-12.554688-19-20.164063-26.277343-7.957031-7.613282-17.699219-13.734376-28.964843-18.199219-11.226563-4.441407-23.667969-6.691407-36.976563-6.691407-5.226563 0-10.28125 2.144532-20.042969 8.5-6.007812 3.917969-13.035156 8.449219-20.878906 13.460938-6.707031 4.273438-15.792969 8.277344-27.015625 11.902344-10.949219 3.542968-22.066406 5.339844-33.039063 5.339844-10.972656 0-22.085937-1.796876-33.046874-5.339844-11.210938-3.621094-20.296876-7.625-26.996094-11.898438-7.769532-4.964844-14.800782-9.496094-20.898438-13.46875-9.75-6.355468-14.808594-8.5-20.035156-8.5-13.3125 0-25.75 2.253906-36.972656 6.699219-11.257813 4.457031-21.003906 10.578125-28.96875 18.199219-7.605469 7.28125-14.390625 16.121094-20.15625 26.273437-5.558594 9.785157-10.058594 19.992188-13.371094 30.339844-3.199219 10.003906-5.875 20.945313-7.953125 32.523437-2.058594 11.476563-3.457031 22.363282-4.148437 32.363282-.679688 9.796875-1.023438 19.964844-1.023438 30.234375 0 26.726562 8.496094 48.363281 25.25 64.320312 16.546875 15.746094 38.441406 23.734375 65.066406 23.734375h246.53125c26.625 0 48.511719-7.984375 65.0625-23.734375 16.757813-15.945312 25.253906-37.585937 25.253906-64.324219-.003906-10.316406-.351562-20.492187-1.035156-30.242187zm0 0" />
        </symbol>
        <symbol id="facebook-icon" viewBox="0 0 448 512">
            <path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path>
        </symbol>

        <symbol id="instagram-icon" viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
        </symbol>

        <symbol id="youtube-icon" viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
        </symbol>

        <symbol id="quote-icon" viewBox="0 0 32 32">
            <path d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"/>
			<path d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"/>
        </symbol>
    </svg>

    <!-- Header Main -->
    <header id="app-header">
        <div class="container-fluid d-flex justify-content-between align-items-center p-0 pl-lg-4">
            <div class="header-item d-flex align-items-center">
                <div class="logo position-relative">
                    <a href="#" class="logo-link d-flex justify-content-center align-items-center position-absolute"><img
                            src="../../images/icon/logo/logo.png" alt="logo"></a>
                </div>
                <div class="search d-none d-sm-flex align-items-center">
                    <form id="form-search" class="form form--search">
                        <input class="form-control" type="search" placeholder="Поиск...">
                        <div class="search-btn position-absolute">
                            <svg width="25" height="25">
                                <use xlink:href="#search-icon"></use>
                            </svg>
                        </div>
                    </form>
                </div>
            </div>
            <div class="header-item d-flex justify-content-end justify-content-lg-between align-items-center">
                <ul class="login-list list-unstyled d-none d-lg-flex">
                    <li class="login-list-item">
                        <a href="#" class="login-list-item__link">
                            Войти
                            <svg width="25" height="25">
                                <use xlink:href="#user-icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <div class="decoration-line d-none d-lg-block"></div>
                <ul class="nav-social-list list-unstyled d-none d-lg-flex">
                    <li class="nav-social-list-item nav-social-list-ite--facebook mr-3">
                        <a href="#" class="nav-social-list-item__link">
                            <svg width="25" height="25">
                                <use xlink:href="#facebook-icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-social-list-item nav-social-list-item--instagram mr-3">
                        <a href="#" class="nav-social-list-item__link">
                            <svg width="25" height="25">
                                <use xlink:href="#instagram-icon"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="nav-social-list-item nav-social-list-item--youtube">
                        <a href="#" class="nav-social-list-item__link">
                            <svg width="25" height="25">
                                <use xlink:href="#youtube-icon"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
                <?php
                    foreach($phones as $phone) {
                        echo '<div class="contact-phone d-none d-lg-block">'
                        . '<a href="tel:' . str_replace(['(', ')', '-', ' '], '', $phone) . '" class="contact-phone-link text-white">' . $phone . '</a>'
                        . '</div>';
                    }
                ?>
                <div class="burger-menu d-flex flex-column justify-content-center align-items-center position-relative">
                    <div class="line line--top"></div>
                    <div class="line line--middle"></div>
                    <div class="line line--bottom"></div>
                    <div class="line line-close line--left"></div>
                    <div class="line line-close line--right"></div>
                </div>
                <div class="menu position-absolute d-flex align-items-center">
                    <ul class="menu-nav-list list-unstyled">
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                о нас
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                программа и стоимость
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                учебные материалы
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                преподаватели
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                вакансии
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                отзывы
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                вопросы
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                фотогалерея
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                статьи
                            </a>
                        </li>
                        <li class="menu-nav-list-item">
                            <a href="#" class="menu-nav-list-item__link">
                                контакты
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    