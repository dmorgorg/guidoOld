export const topMatter = {
    description: 'guided practice',
    course: 'fluids', // statics, strength
    courseModule: 'open channel flow'
}

export default [
    // section, or sub-type of course module
    'rectangular channel',

    // first problem
    [
        // problem statement
        `A rectangular channel has a width of !$4.00\\,\\mathsf{m}!$ and a slope of !$0.1\\%!$. 
        For a discharge of !$4.80\\,\\mathsf{m^3\\!/s}!$, the depth is measured to be !$850\\,\\mathsf{mm}!$. 
        Determine the average flow velocity for these conditions. 
        Then find the average flow velocity !$v!$ and the discharge !$Q!$ when the depth is !$1.700\\,\\mathsf{m}!$.`,


        // wrapper for problem parts
        [
            // first problem part
            [
                `Find !$\\large v_{(0.850\\,\\mathsf{m})} !$`,

                `
                Calculate the cross-sectional area of the channel:
                $$\\begin{aligned}
                    A &= \\textsf{base}\\times\\textsf{depth} \\\\
                    &= 4.00\\cdot 0.850 \\\\
                    &= 3.4000\\,\\mathsf{m^2} 
                \\end{aligned}$$
                Calculate the velocity:
                $$\\begin{aligned}
                    v &= Q/A \\\\
                    &= \\frac{4.80\\,\\mathsf{m^3\\!/s}}{3.4000\\,\\mathsf{m^2}} \\\\
                    &= 1.4118\\,\\mathsf{m/s}
                \\end{aligned}$$`,

                `$$ {\\large v_{(0.850\\,\\mathsf{m})}} = 1.4118\\,\\mathsf{m/s}$$`,
            ],

            // second problem part
            [
                `Find !$n!$.`,

                `$$\\begin{aligned}                    
                    P &= 4.00+2(0.850) \\\\
                    &= 5.7000\\,\\mathsf{m}\\\\
                    R &= A/P \\\\
                    &= \\frac {3.4000\\,\\mathsf{m^2}}{5.7000\\,\\mathsf{m}} \\\\
                    &= 0.59649\\,\\mathsf{m} \\\\\\\\
                    Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
                    \\Rightarrow  n &= \\frac {AR^{2/3} S^{1/2}}{Q} \\\\
                    &= \\frac{(3.4000)(0.59649)^{2/3}(0.001)^{1/2}}{4.80} \\\\
                    &= 0.015872
                \\end{aligned}$$`,

                `$$ n=0.015872 $$`,
            ],

            // third problem part
            [
                `Find !$\\large v_{(1.700\\,\\mathsf{m})} !$`,

                `$$\\begin{aligned}
                    A &= 4.00 \\cdot 1.700 \\\\
                      &= 6.8000\\,\\mathsf{m^2} \\\\\\\\
                    WP &= 4.00+2(1.700) \\\\
                      &= 7.4000\\,\\mathsf{m}\\\\\\\\
                    R &= A/P \\\\
                      &= \\frac {6.8000\\,\\mathsf{m^2}}{7.4000\\,\\mathsf{m}} \\\\
                      &= 0.91892\\,\\mathsf{m} \\\\\\\\
                    v &= \\frac 1n R^{2/3} S^{1/2} \\\\
                      &= \\frac 1{0.015872} (0.91892)^{2/3} (0.001)^{1/2} \\\\
                      &= 1.8832\\,\\mathsf{m/s}
                \\end{aligned}$$`,

                `$$ {\\large v_{(1.700\\,\\mathsf{m})}} = 1.8832\\,\\mathsf{m/s}$$`,
            ],

            [
                `Find !$\\large Q_{(1.700\\,\\mathsf{m})} !$`,

                `$$\\begin{aligned}
                    Q &= Av \\\\
                      &= 6.8000\\cdot 1.8832 \\\\
                      &= 12.805\\,\\mathsf{m/s}
                \\end{aligned}$$`,

                `$$ {\\large Q_{(1.700\\,\\mathsf{m})}} = 12.805\\,\\mathsf{m^3/s}$$`,
            ],

            // end of problem parts wrapper
        ],

        // problem answer
        `$$ { v_{(0.850\\,\\mathsf{m})}} = 1.412\\,\\mathsf{m/s},\\quad  {Q_{(1.700\\,\\mathsf{m})}} 
        = 12.81\\,\\mathsf{m^3/s}, \\quad { v_{(1.700\\,\\mathsf{m})}} = 1.883\\,\\mathsf{m/s} $$`

    ],

    // PROBLEM 2

    [
        `A rectangular channel with a base of !$ 6.25\\,\\mathsf{m} !$ has a depth of !$y = 1.650\\, \\mathsf{m} !$ 
        when the discharge (volume flow rate) is !$ Q=23.5 \\,\\mathsf{m^3\\!/s} !$. 
        Determine !$E!$, the specific energy, and classify the flow.`,

        // part solutions
        [
            [
                `Find !$v!$, the average flow velocity.`,

                `$$     
                    \\begin{aligned}
                        A &= b \\cdot y \\\\ 
                        &= 6.25\\,\\mathsf{m} \\times 1.650\\,\\mathsf{m} \\\\
                        &= 10.313 \\,\\mathsf{m^2} \\\\\\\\ 
                        v &= Q/A \\\\
                        &= \\frac{23.5\\,\\mathsf{m^3/s}}{10.313\\,\\mathsf{m^2}} \\\\
                        &= 2.2787 \\,\\mathsf{m/s} 
                    \\end{aligned}
                $$`,

                `$$ v=2.2787 \\,\\mathsf{m/s} $$`,
            ],

            [
                `Find !$E!$, the specific energy.`,

                `$$
                    \\begin{aligned}
                        E &= y + \\frac{v^2}{2g} \\\\
                        &= 1.650\\,\\mathsf{m}+\\frac{(2.2787\\,\\mathsf{m/s})^2}{2(9.81\\,\\mathsf{m/s^2)}} \\\\ 
                        &=1.9147\\,\\mathsf{m}
                    \\end{aligned}
                $$`,

                `$$E=1.9147 \\,\\mathsf{m}$$`,
            ],

            [
                `Determine !$N_F!$, the Froude number, and use it to classify the flow.`,

                `$$
                    \\begin{aligned}
                        N_F &= \\frac{v}{\\sqrt{g(A/T)}} \\\\
                        &= \\frac{2.2787\\,\\mathsf{m/s}}{\\sqrt{(9.81\\,\\mathsf{m/s^2})(1.650\\,\\mathsf{m})}} \\\\
                        &= 0.56638 \\\\
                        &<1 \\qquad(\\textsf{Flow is sub-critical})
                    \\end{aligned}
                $$`,
                `$$ N_F = 0.56638<1\\qquad(\\textsf{Flow is sub-critical})  $$`,
            ],
        ],

        // the answer
        `$$ N_F = 0.56638&lt;1\\qquad(\\textsf{Flow is sub-critical})  $$`,
    ],

    [
        `A rectangular flume is built out of wood (!$n=0.012!$) and has a base width of !$1.250\\,\\mathsf{m}!$. 
        The flume has a longitudinal slope of !$0.14\\%!$ and a flow depth of !$950\\,\\mathsf{mm}!$. 
        Determine !$Q!$, the discharge, and the slope !$S_c!$ at which this flow becomes critical.
        What is the critical depth !$y_c!$ and the critical velocity !$v_c!$ for this !$Q!$?`,
    ],
    [
        `For discharge !$Q!$ in a rectangular channel, the velocity of flow under critical 
        conditions is !$1.900\\,\\mathsf{m/s}!$. If the channel is !$4.50\\,\\mathsf{m}!$ in width, determine !$Q!$.`,
    ],

    // section, or sub-type of course module
    `triangular channel`,
    [
        'problem statement 1'
    ],



    // section, or sub-type of course module
    `trapezoidal channel`,
    [
        'problem statement 1'
    ],

    // section, or sub-type of course module
    `circular channel`,
    [
        'problem statement 1'
    ],


]