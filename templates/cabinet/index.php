<?php

require_once('../../views/base/header-secondary.php');

?>


<main>

    <section id="cabinet-page" class="section-page-secondary">
        <div class="container h-100">
            <div class="row h-100">
                <div class="registration-img" style="background-image: url('../../images/bg/cabinet-bg.jpg');"></div>
                <div class="col-sm-6 h-100 mx-auto ml-lg-auto mr-lg-0 px-lg-5 d-flex align-items-center">
                    <div class="cabinet-page-item">
                        <h2 class="registration-title text-white">ЛИЧНЫЙ КАБИНЕТ</h2>
                        <div class="cabinet-page-tabs">
                            <div class="cabinet-page-tabs-header">
                                <ul class="cabinet-page-tabs-header-list list-unstyled d-flex">
                                    <li class="cabinet-page-tabs-header-list-item active mr-2 mr-xl-4">ПРОФИЛЬ</li>
                                    <li class="cabinet-page-tabs-header-list-item mr-2 mr-xl-4">СМЕНА ПАРОЛЯ</li>
                                    <li class="cabinet-page-tabs-header-list-item">ПЛАТНЫЕ УСЛУГИ</li>
                                </ul>
                            </div>
                            <div class="cabinet-page-tabs-body">
                                <div class="cabinet-page-tabs-body-item active">
                                    <form action="#" id="form-cabinet-login">

                                        <div class="form-group-item d-flex flex-column justify-content-lg-start align-items-start">

                                            <div class="form-group w-100 position-relative">
                                                <label for="user-name--cabinet-login" class="label-placeholder">Введите
                                                    имя</label>
                                                <input type="text" class="form-control position-relative" id="user-name--cabinet-login"
                                                    placeholder="Ваше имя">
                                            </div>

                                            <div class="form-group w-100 position-relative">
                                                <label for="user-email--cabinet-login" class="label-placeholder">Ваш
                                                    почтовый ящик</label>
                                                <input type="email" class="form-control position-relative" id="user-email--cabinet-login"
                                                    placeholder="Введите Email">
                                            </div>

                                            <div class="form-group w-100 position-relative mb-3">
                                                <label for="user-phone--cabinet-login" class="label-placeholder">Ваш
                                                    номер телефона</label>
                                                <input type="text" class="form-control position-relative py-4" id="user-phone--cabinet-login"
                                                    placeholder="Введите номер">
                                            </div>

                                            <div class="form-group w-100 position-relative mb-3">
                                                <label for="user-date--cabinet-login" class="label-placeholder">Дата
                                                    Вашего рождения</label>
                                                <input type="date" class="form-control position-relative" id="user-date--cabinet-login"
                                                    placeholder="01-01-1975">
                                            </div>

                                            <button id="cabinet-login-btn" class="btn btn-outline-light text-secondary mt-4">Cохранить</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="cabinet-page-tabs-body-item">
                                    <form action="#" id="form-cabinet-confirm">

                                        <div class="form-group-item d-flex flex-column justify-content-lg-start align-items-start">


                                            <div class="form-group w-100 position-relative mb-3">
                                                <label for="user-password--cabinet-confirm" class="label-placeholder">Ваш
                                                    пароль</label>
                                                <input type="password" class="form-control position-relative py-4" id="user-password--cabinet-confirm"
                                                    placeholder="Введите пароль">
                                            </div>

                                            <div class="form-group w-100 position-relative mb-3">
                                                <label for="user-password-cabinet--password-confirm" class="label-placeholder">Подтвердите
                                                    пароль</label>
                                                <input type="password" class="form-control position-relative py-4" id="user-password-cabinet--password-confirm"
                                                    placeholder="Подтвердите пароль">
                                            </div>

                                            <button id="cabinet-confirm-btn" class="btn btn-outline-light text-secondary mt-4">Cохранить</button>
                                        </div>
                                    </form>
                                </div>
                                <div class="cabinet-page-tabs-body-item">
                                    <div class="cabinet-access-cod-title text-white mb-3">
                                        Вам необходимо получить оффлайн-код для получения доступа к учебным материалам
                                    </div>
                                    <form action="#" id="form-cabinet-access-cod">

                                        <div class="form-group-item d-flex flex-column justify-content-lg-start align-items-start">

                                            <div class="form-group w-100 position-relative">
                                                <label for="user-name--cabinet-access-cod" class="label-placeholder">Введите
                                                    оффлайновый код доступа</label>
                                                <input type="text" class="form-control position-relative" id="user-name--cabinet-access-cod"
                                                    placeholder="Код доступа">

                                                <button id="cabinet-cabinet-btn" class="btn btn-outline-light text-secondary mt-4">Войти</button>
                                            </div>

                                        </div>
                                    </form>
                                    <div class="cabinet-access-cod-content">
                                        <div class="cabinet-access-cod-item">
                                            <div class="cabinet-access-cod-item-img" style="background-image: url('../../images/content/materials/materials-item-1.jpg');"></div>
                                            <div class="cabinet-access-cod-item-description">
                                                <p class="cabinet-access-cod-item-description__text">Теперь Вы можете
                                                    скачать книги к курсу ENGLISHLAND
                                                </p>
                                                <a href="#" class="btn btn-outline-secondary cabinet-access-cod-item-description__btn text-white">Cкачать pdf</a>
                                            </div>
                                        </div>
                                        <div class="cabinet-access-cod-item">
                                            <div class="cabinet-access-cod-item-img" style="background-image: url('../../images/content/cabinet/cabinet-item-1.jpg');">
                                                <svg width="60" height="60">
                                                    <use xlink:href="#player-icon"></use>
                                                </svg>
                                            </div>
                                            <div class="cabinet-access-cod-item-description">
                                                <p class="cabinet-access-cod-item-description__text">Смотреть
                                                    видеоуроки к курсу ENGLISHLAND
                                                </p>
                                                <a href="#" class="btn btn-outline-secondary cabinet-access-cod-item-description__btn text-white">Скачать mp4</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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