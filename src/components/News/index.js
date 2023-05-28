/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import $ from "jquery";

function News() {
	useEffect(() => {
		const $element1 = $(".home-news-content");
		const $element2 = $(".fe-block-3284dc0550b8600a7274");

		$element1.append($element2);

		// css
		$(".summary-metadata-item--date").addClass("news-item__date").removeClass("summary-metadata-item--date").removeClass("summary-metadata-item");
		$(".summary-read-more-link").addClass("news-item__link").removeClass("summary-read-more-link");

		$('section[data-section-id="6472e7d959a4f10c5e5afedc"]').remove();
	}, []);
	return (
		<section class="home-news">
			<header class="home-news-header">
				<h2 class="home-news-title">NEWS</h2>{" "}
				<a href="/news/" class="home-news-link arrow-button active">
					<span class="text">View All</span> <span class="arrow"></span> <span class="line"></span>
				</a>
			</header>
			<div class="home-news-content"></div>
		</section>
	);
}

export default News;