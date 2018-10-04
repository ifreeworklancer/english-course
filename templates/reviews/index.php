<?php

require_once('../../views/base/header-secondary.php');

?>


<main>

    <section id="reviews-page" class="section-page-secondary">

        <!-- Modal -->
        <div class="container">
            <div class="row">
                <div class="col-12">

                    <div class="modal-feedback">
                        <div class="modal-feedback-container">

                            <div id="close-modal-feedback" class="closs-modal position-absolute">
                                <div class="line line--left"></div>
                                <div class="line line--right"></div>
                            </div>

                            <h2 class="modal-feedback__title">Оставить отзыв</h2>

                            <form action="#" id="form-modal-feedback">

                                <div class="form-group-header d-flex flex-column flex-sm-row justify-content-between align-items-center">
                                    <div class="form-group position-relative">
                                        <label for="user-name--modal-feedback" class="label-placeholder">Введите имя</label>
                                        <input type="text" class="form-control position-relative" id="user-name--modal-feedback"
                                            placeholder="Ваше имя">
                                    </div>
                                    <div class="form-group position-relative">
                                        <label for="user-email--modal-feedback" class="label-placeholder">Ваш почтовый
                                            ящик</label>
                                        <input type="email" class="form-control position-relative" id="user-email--modal-feedback"
                                            placeholder="Введите Email">
                                    </div>
                                </div>

                                <div class="form-group-body">
                                    <div class="form-group form-group--textarea position-relative">
                                        <label for="user-message--modal-feedback" class="label-placeholder">Ваш отзыв</label>
                                        <textarea class="form-control position-relative" id="user-message--modal-feedback"
                                            rows="2" placeholder="Введите сообщение"></textarea>
                                    </div>
                                </div>

                                <div class="form-group-footer d-flex flex-column flex-lg-row justify-content-between align-items-center">
                                    <div class="form-group-footer-item">
                                        <div class="form-group">
                                            <label for="file--modal-feedback" class="form-control-label">Загрузить
                                                <span class="label-placeholder__link">файл</span>
                                                с видеоотзывом (mp4, avi)</label>
                                            <input type="file" class="form-control-file d-none" id="file--modal-feedback">
                                        </div>
                                        <div class="form-group form-check">
                                            <input type="checkbox" class="form-check-input d-none" id="agree--modal-feedback">
                                            <label class="label-placeholder form-check-label" for="agree--modal-feedback">
                                                Я соглашаюсь с <a href="#" class="label-placeholder__link">правилами
                                                    пользования</a>
                                                сайтом.
                                            </label>
                                        </div>
                                    </div>
                                    <div class="form-group-footer-item">
                                        <button class="btn btn-outline-light text-primary">Оставить отзыв</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="page-secondary-banner" style="background-image: url('../../images/bg/banner/reviews-page-banner.jpg');"></div>
            <ul class="breadcrumbs-list list-unstyled d-flex">
                <li class="breadcrumbs-list-item">
                    <a href="#" class="breadcrumbs-list-item__link">Главная</a>
                </li>
                <li class="breadcrumbs-list-item">
                    <a href="#" class="breadcrumbs-list-item__link">Отзывы</a>
                </li>
            </ul>

            <h2 class="page-secondary-title page-secondary-title--big-margin text-white">Мнения людей о нас</h2>

            <div class="reviews-page-content">
                <div class="row">
                    <div class="col-12">
                        <div class="programs-show-description">
                            <h2 class="programs-show-description__title">Отзывы</h2>
                            <a href="#" id="add-reviews-btn" class="btn btn-outline-primary programs-show-description__btn">Оставить
                                отзыв</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-1.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Елена</h3>
                                    <div class="reviews-slider-item-content-main-info__data">21 мая 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <p class="reviews-slider-item-content-main-description__text">
                                        Опытные преподаватели, качественный индивидуальный подход к каждому
                                        ребенку.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-2.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Екатерина</h3>
                                    <div class="reviews-slider-item-content-main-info__data">25 июня 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <p class="reviews-slider-item-content-main-description__text">
                                        Мой сын выучил английский благодая этим курсам, в общеобразовательной школе
                                        таких
                                        знаний не дают.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-3.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Максим Олегович</h3>
                                    <div class="reviews-slider-item-content-main-info__data">25 мая 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <p class="reviews-slider-item-content-main-description__text">
                                        Поступили в киевский ВУЗ на ин.яз. благодаря курсам. Спасибо преподавателю
                                        Валерии
                                        Викторовне, она высококлассный специалист.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-4.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Антонина</h3>
                                    <div class="reviews-slider-item-content-main-info__data">25 июня 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <a href="#" class="btn btn-outline-secondary text-primary">Видео отзыв</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-1.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Елена</h3>
                                    <div class="reviews-slider-item-content-main-info__data">21 мая 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <p class="reviews-slider-item-content-main-description__text">
                                        Опытные преподаватели, качественный индивидуальный подход к каждому
                                        ребенку.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="reviews-slider-item-content">
                            <div class="reviews-slider-item-content__img" style="background-image: url('../../images/content/reviews/reviews-item-2.png');"></div>
                            <div class="reviews-slider-item-content-main">
                                <div class="reviews-slider-item-content-main-info">
                                    <h3 class="reviews-slider-item-content-main-info__name">Екатерина</h3>
                                    <div class="reviews-slider-item-content-main-info__data">25 июня 2018</div>
                                </div>
                                <div class="reviews-slider-item-content-main-description">
                                    <p class="reviews-slider-item-content-main-description__text">
                                        Мой сын выучил английский благодая этим курсам, в общеобразовательной школе
                                        таких
                                        знаний не дают.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-sm-4">
                    <div class="pagination d-flex align-items-center">
                        <ul class="pagination-list list-unstyled d-flex">
                            <li class="pagination-list-item"><a class="pagination-list-item__link" href="#">1</a></li>
                            <li class="pagination-list-item"><a class="pagination-list-item__link is-active" href="#">2</a></li>
                            <li class="pagination-list-item"><a class="pagination-list-item__link" href="#">3</a></li>
                            <li class="pagination-list-item"><a class="pagination-list-item__link" href="#">...</a></li>
                        </ul>
                        <div class="pagination-next ml-4"><a class="pagination-next__link" href="#">Следующая </a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</main>

<?php

require_once('../../views/sections/feedback.php');

require_once('../../views/base/footer-secondary.php');