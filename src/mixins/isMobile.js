export default {
    methods: {
        isMobile() {
            if (window.innerWidth <= 430) {
                return true;
            } else {
                return false;
            }

        }
    }
}