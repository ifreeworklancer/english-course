<?php

require_once('../../views/base/header-secondary.php');

?>


<main>

    <section id="login-page" class="section-page-secondary section-page-secondary--registration section-page-secondary--login">
        <div class="container h-100">
            <div class="row h-100">
                <div class="registration-img" style="background-image: url('../../images/bg/login-bg.jpg');"></div>
                <div class="col-sm-6 h-100 mx-auto ml-lg-auto mr-lg-0 px-lg-5 d-flex align-items-center">
                    <div class="login-page-item">
                        <h2 class="registration-title text-white">Войти</h2>
                        <form action="#" id="form-login">

                            <div class="form-group-item d-flex flex-column justify-content-lg-start align-items-start">
                                <div class="form-group w-100 position-relative mb-3">
                                    <label for="user-name--login" class="label-placeholder">Введите имя</label>
                                    <input type="text" class="form-control position-relative py-4" id="user-name--login"
                                        placeholder="Ваше имя">
                                </div>

                                <div class="form-group w-100 position-relativemb-3">
                                    <label for="user-password--login" class="label-placeholder">Ваш пароль</label>
                                    <input type="password" class="form-control position-relative py-4" id="user-password--login"
                                        placeholder="Введите пароль">
                                </div>

                                <div class="form-group form-check pl-0 mb-4">
                                    <input type="checkbox" class="form-check-input d-none" id="agree--login">
                                    <label class="label-placeholder form-check-label" for="agree--login">
                                        Запомнить меня
                                    </label>
                                </div>

                                <button id="login-btn" class="btn btn-outline-light text-secondary mb-4">Отправить</button>

                                <div class="social-registration d-flex">
                                    <div class="social-registration__text text-white mr-1 mr-sm-3">Войти с помощью
                                        соцсетей:</div>
                                    <ul class="nav-social-list list-unstyled d-flex">
                                        <li class="nav-social-list-item mr-4">
                                            <a href="#" class="nav-social-list-item__link">
                                                <svg width="25" height="25">
                                                    <use xlink:href="#facebook-icon"></use>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="nav-social-list-item mr-4">
                                            <a href="#" class="nav-social-list-item__link">
                                                <svg width="25" height="25">
                                                    <use xlink:href="#instagram-icon"></use>
                                                </svg>
                                            </a>
                                        </li>
                                        <li class="nav-social-list-item">
                                            <a href="#" class="nav-social-list-item__link">
                                                <svg width="25" height="25">
                                                    <use xlink:href="#youtube-icon"></use>
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <a href="#" class="registration-btn text-center d-block text-white py-4">
                            ЗАРЕГЕСТРИРОВАТЬСЯ
                            </a>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

</main>

<!-- Script -->
<script src="../../../dist/app.js"></script>


</body>

</html>