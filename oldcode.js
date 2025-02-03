jQuery(document).ready(function () {
    const smallCarousel = {
        settings: {
            $container: jQuery('.circle-container-gjgyjjuytui'),
            $items: jQuery('.circle-container-gjgyjjuytui .item'),
            currentIndex: 0,
            totalItems: jQuery('.circle-container-gjgyjjuytui .item').length,
            scrollFactor: 0.1, // Adjust rotation sensitivity
        },

        init() {
            this.bindEvents();
            this.bindScroll(); // Bind scroll functionality
        },

        bindEvents() {
            const { $items } = this.settings;

            // Click event for circle items
            $items.each((index, item) => {
                jQuery(item).find('a').on('click', (e) => {
                    e.preventDefault();
                    this.stopAutoRotate();
                    this.rotateTo(index);

                    // Update background and text styles
                    const bgColor = jQuery(e.currentTarget).attr('data-bgColor');
                    const color = jQuery(e.currentTarget).attr('data-color');
                    const title = jQuery(e.currentTarget).attr('data-title');

                    jQuery('.container-gjgyjjuytui').css('backgroundColor', bgColor);
                    jQuery('.text').text(title).css('color', color);
                });
            });
        },

        bindScroll() {
            const { totalItems } = this.settings;

            jQuery(window).on('scroll', () => {
                const scrollTop = jQuery(window).scrollTop();
                const scrollDelta = scrollTop * this.settings.scrollFactor;

                // Calculate rotation based on scroll delta
                const rotation = scrollDelta % 360;

                this.rotateContinuous(rotation, totalItems);
            });
        },

        rotateContinuous(rotation, totalItems) {
            const { $items } = this.settings;
            const angle = 360 / totalItems; // Angle between each item
            const containerRadius = this.settings.$container.width() / 0.75; // Radius of the container

            $items.each((i, item) => {
                const itemRotation = angle * i + rotation;

                jQuery(item).css({
                    transform: `rotate(${itemRotation}deg) translateY(-${containerRadius}px) rotate(${-itemRotation}deg)`,
                });
            });
        },

        rotateTo(index) {
            const { $items, totalItems } = this.settings;
            const angle = 360 / totalItems; // Angle between each item
            const containerRadius = this.settings.$container.width() / 0.75; // Radius of the container

            $items.each((i, item) => {
                // Calculate rotation so the active item is at the bottom (180deg position)
                const rotation = angle * (i - index);

                jQuery(item).css({
                    transform: `rotate(${rotation}deg) translateY(-${containerRadius}px) rotate(${-rotation}deg)`,
                });
            });

            this.updateActiveStates(index);
            this.settings.currentIndex = index;
        },

        updateActiveStates(index) {
            const { $items } = this.settings;

            $items.find('li').removeClass('active');
            $items.eq(index).find('li').addClass('active');
        },

        stopAutoRotate() {
            clearInterval(this.autoRotateInterval);
        },
    };

    smallCarousel.init();
});

