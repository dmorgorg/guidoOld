export const topMatter = {
    description: 'guided practice',
    course: 'statics', // statics, strength
    courseModule: 'open channel flow'
}

export default [
    // section, or sub-type of course module
    'rectangular channel',
    [
        `A rectangular channel has a width of !$4.00\\,\\mathsf{m}!$ and a slope of !$0.1\\%!$. 
        For a discharge of !$4.80\\,\\mathsf{m^3\\!/s}!$, the depth is measured to be !$850\\,\\mathsf{mm}!$. 
        Determine the average flow velocity for these conditions. 
        Also, determine the discharge and average flow velocity when the depth is !$1.700\\,\\mathsf{m}!$.`,

        [
            [ 
                `Find !$\\large v_{(0.850\\,\\mathsf{m})} !$`,

                `$$\\begin{aligned}
                    A &= 4.00\\cdot 0.850 \\\\
                    &= 3.4000\\,\\mathsf{m^2} \\\\\\\\
                    v &= Q/A \\\\
                    &= \\frac{4.80\\,\\mathsf{m^3\\!/s}}{3.4000\\,\\mathsf{m^2}} \\\\
                    &= 1.4118\\,\\mathsf{m/s}
                \\end{aligned}$$`,
        
                `$$ {\\large v_{(0.850\\,\\mathsf{m})}} = 1.4118\\,\\mathsf{m/s}$$`,
            ],

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

        ]

    ],

    [
        `A rectangular channel with a base of !$ 6.25\\,\\mathsf{m} !$ has a depth of !$y = 1.650\\, \\mathsf{m} !$ 
        when the discharge (volume flow rate) is !$ Q=23.5 \\,\\mathsf{m^3\\!/s} !$. 
        Determine !$E!$, the specific energy, and classify the flow.`,
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