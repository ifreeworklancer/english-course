<?php

require_once('../../views/base/header-secondary.php');

?>


<main>

    <section id="singup-page" class="section-page-secondary section-page-secondary--registration">
        <div class="container h-100">
            <div class="row h-100">
                <div class="registration-img" style="background-image: url('../../images/bg/singup-bg.jpg');"></div>
                <div class="col-sm-6 h-100 mx-auto ml-lg-auto mr-lg-0 px-lg-5 d-flex align-items-center">
                    <div class="singup-page-item">
                        <h2 class="registration-title text-white">ЗАРЕГЕСТРИРОВАТЬСЯ</h2>
                        <form action="#" id="form-singup">

                            <div class="form-group-item d-flex flex-column justify-content-lg-start align-items-start">
                                <div class="form-group w-100 position-relative mb-3">
                                    <label for="user-name--singup" class="label-placeholder">Введите имя</label>
                                    <input type="text" class="form-control position-relative py-4" id="user-name--singup"
                                        placeholder="Ваше имя">
                                </div>

                                <div class="form-group w-100 position-relative mb-3">
                                    <label for="user-email--singup" class="label-placeholder">Ваш почтовый
                                        ящик</label>
                                    <input type="email" class="form-control position-relative py-4" id="user-email--singup"
                                        placeholder="Введите Email">
                                </div>

                                <div class="form-group w-100 position-relativemb-3">
                                    <label for="user-password--singup" class="label-placeholder">Ваш пароль</label>
                                    <input type="password" class="form-control position-relative py-4" id="user-password--singup"
                                        placeholder="Введите пароль">
                                </div>

                                <div class="form-group w-100 position-relativemb-3">
                                    <label for="user-password-confirm--singup" class="label-placeholder">Подтвердите
                                        пароль</label>
                                    <input type="password" class="form-control position-relative py-4" id="user-password-confirm--singup"
                                        placeholder="Подтвердите пароль">
                                </div>

                                <div class="form-group form-check pl-0">
                                    <input type="checkbox" class="form-check-input d-none" id="agree-singup">
                                    <label class="label-placeholder form-check-label" for="agree-singup">
                                        Запомнить меня
                                    </label>
                                </div>

                                <button id="singup-btn" class="btn btn-outline-light text-secondary mb-4">Отправить</button>

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
                                Войти
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