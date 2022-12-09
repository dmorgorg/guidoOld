<script>
    import MathJax from "mathjax";

    MathJax = {
        tex: {
            inlineMath: [
                ["$", "$"],
                ["\\(", "\\)"],
            ],
        },
    };
</script>

<slot/>