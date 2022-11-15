export const topMatter = {
    description: 'guided practice',
    course: 'strength', // statics, strength, fluids
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

                `Calculate the length of the wetted perimeter, !$P!$:
                $$\\begin{aligned}                    
                    P &= 4.00\\textsf{ m}+2\\times0.850\\textsf{ m} \\\\
                    &= 5.7000\\,\\mathsf{m}
                \\end{aligned}$$
                And now the value of the hydraulic radius, !$R!$:
                $$\\begin{aligned}
                    R &= A/P \\\\
                    &= \\frac {3.4000\\,\\mathsf{m^2}}{5.7000\\,\\mathsf{m}} \\\\
                    &= 0.59649\\,\\mathsf{m} 
                \\end{aligned}$$
                Rearrange Manning's Formula to isolate !$n!$:
                $$\\begin{aligned}
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
        `$$ 
        \\begin{aligned}
            v_{(0.850\\,\\mathsf{m})} &= 1.412\\, \\mathsf{m/s} \\\\
            Q_{(1.700\\,\\mathsf{m})} &= 12.81\\,\\mathsf{m^3/s} \\\\
            v_{(1.700\\,\\mathsf{m})} &= 1.883\\,\\mathsf{m/s} 
        \\end{aligned} $$`

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
                `$$ N_F = 0.56638\\lt 1\\qquad(\\textsf{Flow is sub-critical})  $$`,
            ],
        ],

        // the answer
        `$$ N_F = 0.56638\\lt 1\\qquad(\\textsf{Flow is sub-critical})  $$`,
    ],

    [
        `A rectangular flume is built out of wood (!$n=0.012!$) and has a base width of !$1.250\\,\\mathsf{m}!$. 
        The flume has a longitudinal slope of !$0.14\\%!$ and a flow depth of !$950\\,\\mathsf{mm}!$. 
        Determine !$Q!$, the discharge, and the slope !$S_c!$ at which this flow becomes critical.
        What is the critical depth !$y_c!$ and the critical velocity !$v_c!$ for this !$Q!$?`,

        [
            [
              `Use !$A!$ and !$R!$ to find !$Q!$.`,
              `$$     
                          \\begin{aligned}
                              A &= b \\cdot y \\\\
                              &=1.250\\,\\mathsf{m} \\times 0.900\\,\\mathsf{m} \\\\
                              &= 1.1250 \\,\\mathsf{m} \\\\\\\\
                              P &= b+2y \\\\
                              &= 1.250\\,\\mathsf{m} + 2(0.900\\,\\mathsf{m}) \\\\
                              &= 3.0500\\,\\mathsf{m} \\\\\\\\
                              R &= A/P \\\\
                              &= \\frac{1.1250 \\,\\mathsf{m}}{3.0500 \\, \\mathsf{m}} \\\\
                              &= 0.36885\\,\\mathsf{m} \\\\\\\\
                              Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
                              &= \\frac 1{0.012} (1.1250)(0.36885)^{2/3} (0.0014)^{1/2} \\\\ 
                              &= 1.8041\\,\\mathsf{m^3/s} 
                          \\end{aligned}
                      $$`,
              `$$ Q=1.8041\\,\\mathsf{m^3/s} $$`,
            ],
            [
              `Solve for !$y_c!$.`,
              `$$
                          \\begin{aligned}
                              N_F &= \\frac v{\\sqrt{g(A/T)}}=1 \\\\
                              \\Rightarrow v_c &= \\sqrt{g(A_c/T_c)} \\\\\\\\ 
                              \\Rightarrow \\left(\\frac Q{A_c}\\right)^2 &= g(A_c/T_c) \\\\
                              \\Rightarrow \\frac{Q^2}g &= \\frac{A_c^3}{T_c} \\\\
                              &= \\frac{\\left(b\\cdot y_c\\right)^3}{b} \\\\
                              &= b^2 y_c^3 \\\\
                              \\Rightarrow y_c &= \\left(\\frac{Q^2}{b^2g}\\right)^{1/3} \\\\
                              &= \\left(\\frac{(1.8041)^2}{(1.250)^2(9.81)}\\right)^{1/3} \\\\
                              &=0.59659\\,\\mathsf{m}
                          \\end{aligned}
                      $$`,
              `$$y_c=0.59659 \\,\\mathsf{m}$$`,
            ],
            [
              `Calculate !$v_c!$.`,
              `$$
                          \\begin{aligned}
                              v_c &= \\frac{Q}{A_c} \\\\
                              &= \\frac{Q}{b\\cdot y_c} \\\\
                              &= \\frac{(1.8041\\,\\mathsf{m^3/s})}{(1.250\\,\\mathsf{m})\\cdot (0.59659 \\,\\mathsf{m})} \\\\
                              &= 2.4192 \\,\\mathsf{m/s}
                          \\end{aligned}
                      $$`,
              `$$ v_c = 2.4192 \\,\\mathsf{m/s} $$`,
            ],
            [
              `Determine the slope !$S_c!$ that generates these critical conditions.`,
              `$$
                          \\begin{aligned}
                              v_c &= \\frac 1n R_c^{2/3} S_c^{1/2} \\\\
                              &= \\frac 1n \\left(\\frac{A_c}{P_c}\\right)^{2/3}\\!\\cdot S_c^{1/2} \\\\ 
                              &= \\frac 1n \\left(\\frac{b\\cdot y_c}{b+2\\cdot y_c}\\right)^{2/3} \\!\\cdot S_c^{1/2} \\\\ \\Rightarrow S_c &= \\left(n\\cdot v_c \\left( \\frac{b+2\\cdot y_c}{b\\cdot y_c}\\right)^{2/3} \\right)^2 \\\\
                              &= \\left(0.012\\cdot 2.4192 \\left( \\frac{1.250+2\\cdot 0.59659}{1.250\\cdot 0.59659}\\right)^{2/3}\\right)^2 \\\\
                              &= 0.0041008 \\\\ 
                              &=0.41008\\%
                          \\end{aligned}
                      $$`,
              `$$ S_c =0.41008\\% $$`,
            ],
          ],
          // the answer
          `$$ Q=1.804\\,\\mathsf{m^3/s},\\; S_c=0.410\\%,\\; y_c=0.597 \\,\\mathsf{m},\\; v_c= 2.42\\,\\mathsf{m/s} $$`,
        

        
    ],




    [
        // problem statement
        `For discharge !$Q!$ in a rectangular channel, the velocity of flow under critical conditions is !$1.900\\,\\mathsf{m/s}!$. If the channel is !$4.50\\,\\mathsf{m}!$ in width, determine !$Q!$.`,
    
        // solution parts
        [
          // part 1
          [
            `Determine the critical depth, !$y_c!$`,
    
            `Under critical conditions,
                $$\\begin{aligned}
                    v_c &= \\sqrt{g(A_c/T_c)} \\\\
                    \\Rightarrow v_c^2 &= g\\cdot\\frac{by_c}{b} \\\\
                    \\Rightarrow (1.900)^2 &= 9.81 y_c \\\\
                    \\Rightarrow y_c &= \\frac{(1.900)^2}{9.81} \\\\
                    &= 0.36799\\,\\mathsf{m}
                \\end{aligned}$$`,
    
            `$$ y_c = 0.36799\\,\\mathsf{m} $$`,
          ],
    
          //part 2
          [
            `Determine !$Q!$`,
    
            `$$\\begin{aligned}
                        Q &= A_c\\cdot v_c \\\\
                        &= \\left(4.50\\cdot y_c \\right)\\cdot v_c \\\\
                        &= 4.50\\cdot 0.36799 \\cdot 1.900 \\\\
                        &= 3.1463\\,\\mathsf{m^3\\!/s} 
                    \\end{aligned}$$`,
    
            `$$ Q= 3.1463\\,\\mathsf{m^3\\!/s} $$`,
          ],
        ],
    
        //the answer
        `$$ Q= 3.15\\,\\mathsf{m^3\\!/s} $$`,
      ],
    
      // ----------------------------------------------------------------------------------------------------------------
      "Triangular Channel",
      // ----------------------------------------------------------------------------------------------------------------
    
      [
        // problem statement
        `<div class="inline-block width50 ">A triangular flume, built from unplaned wood !$(n=0.013)!$, has a design flow of !$3.25\\,\\mathsf{m^3\\!\\!/s}!$. The sidewalls of the flume are inclined at !$45^{\\circ}!$ to the horizontal (i.e., !$z=1!$). If the slope of the flume is !$S=0.001!$, determine the depth !$y!$ of normal flow. Classify this flow. </div>
            <div class="width45 fright"><img src="/images/triangularGuidedPractice1.png" /></div><div class="clear" />`,
    
        // solution parts
        [
          [
            `Determine !$A!$ and !$R!$ in terms of the depth !$y!$.`,
    
            `$$\\begin{aligned}
                        A &= \\frac{2y\\cdot y}{2} \\\\
                        &= y^2 \\\\\\\\
                        P &= 2\\sqrt{y^2+y^2} \\\\
                        &= 2\\sqrt{2y^2} \\\\
                        &= 2\\sqrt{2}\\cdot y \\\\\\\\
                        R &= A/P \\\\
                        &= \\frac{y^2}{2\\sqrt{2}\\cdot y} \\\\
                        &= \\frac{y}{2\\sqrt{2}} \\\\
                    \\end{aligned}$$`,
    
            `$$ A=y^2,\\quad R=\\frac{y}{2\\sqrt{2}} $$`,
          ],
    
          [
            `Use Manning's Equation to solve for !$y!$.`,
    
            `$$\\begin{aligned}
                        Q &= \\frac 1n AR^{2/3}S^{1/2} \\\\
                        \\Rightarrow 3.25 &= \\frac 1{0.013}\\left(y^2\\right)\\left(\\frac{y}{2\\sqrt{2}}\\right)^{2/3}\\!\\!\\left(0.001\\right)^{1/2} \\\\
                        \\Rightarrow y^{8/3} &= \\frac{3.25\\cdot 0.013\\cdot \\left(2\\sqrt{2}\\right)^{2/3}}{(0.001)^{1/2}} \\\\
                        \\Rightarrow y &= \\left(2.6721\\right)^{3/8} \\\\
                        &= 1.4457\\,\\mathsf{m}                
                    \\end{aligned}$$`,
    
            `$$ y = 1.4457\\,\\mathsf{m} $$`,
          ],
    
          [
            `Determine the Froude number to determine the flow type.`,
    
            `$$\\begin{aligned}
                        A &= y^2 \\\\
                        &= \\left(1.4457\\right)^2 \\\\
                        &= 2.0900\\,\\mathsf{m^2} \\\\\\\\
                        v &= Q/A \\\\
                        &= \\frac{3.25}{2.0900} \\\\
                        &= 1.5550\\,\\mathsf{m/s} \\\\\\\\
                        T &= 2y \\\\
                        &= 2.8914\\,\\mathsf{m} \\\\\\\\
                        N_F &= \\frac{v}{\\sqrt{g(A/T)}} \\\\
                        N_F &= \\frac{1.5550}{\\sqrt{9.81(2.0900/2.8914)}} \\\\
                        &= 0.58395 \\\\
                        &< 1\\quad(\\textsf{Flow is sub-critical})
                    \\end{aligned}$$`,
    
            `$$\\textsf{Flow is sub-critical}$$`,
          ],
        ],
        // the big answer
        `$$ y = 1.446\\,\\mathsf{m}, \\quad\\textsf{Flow is sub-critical}$$`,
      ],
    
      "Trapezoidal Section",
    
      [
        `A portion of the Colorado River Aquaduct conveys !$45.3\\,\\mathsf{m^3\\!/s}!$ at a depth of !$3.10\\,
        \\mathsf{m}!$ in a concrete (!$n=0.014!$) trapezoidal channel, as shown. 
        Determine the channel slope for this flow. <br/><div class="width70"><img src="/images/trapezoidalGuidedPractice3.png" /></div><div class="clear" />`,
    
        [
          [
            `Determine the average flow velocity, !$v!$.`,
    
            `$$\\begin{aligned}
                        A &= by + zy^2 \\\\
                        &= 6.10(3.10)+1.5(3.10)^2 \\\\
                        &= 33.325\\,\\mathsf{m^2} \\\\\\\\
                        v &= Q/A \\\\
                        &= \\frac{45.3}{33.325} \\\\
                        &= 1.3593\\,\\mathsf{m/s}
                    \\end{aligned}$$`,
    
            `$$ v=1.3593\\,\\mathsf{m/s} $$`,
          ],
          [
            `Determine the hydraulic radius, !$R!$.`,
    
            `$$\\begin{aligned}
                        
                        P &= b + 2y\\sqrt{1+z^2} \\\\
                        &= 6.10 + 2(3.10)\\sqrt{1+1.5^2} \\\\
                        &= 17.277 \\,\\mathsf{m} \\\\\\\\
                        R &= A/P \\\\
                        &= \\frac{33.325}{17.277} \\\\
                        &= 1.9289 \\,\\mathsf{m}
                    \\end{aligned}$$`,
    
            `$$ R=1.9289\\,\\mathsf{m} $$`,
          ],
    
          [
            `Determine the required slope, !$S!$`,
    
            `$$\\begin{aligned}
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        S &= \\left[\\frac {nv}{R^{2/3}} \\right]^2\\\\
                         &= \\left[\\frac {(0.014)(1.3593)}{(1.9289)^{2/3}} \\right]^2\\\\
                        &= 0.00015083
                    \\end{aligned}$$`,
    
            `$$ S=0.00015083 $$`,
          ],
        ],
    
        `$$ S=0.00015083 $$`,
      ],
    
      [
        `A concrete-lined trapezoidal channel has a bed width of !$6.00\\,\\mathsf{m}!$ and side slopes of !$z=0.5!$, a longitudinal slope of !$1!$ in !$850!$ and a Manning's coefficient of !$n=0.014!$. Calculate the discharge and average flow velocity for normal flow with a depth of !$2.30\\,\\mathsf{m}!$. Classify this flow.<br/> <div class="width55"><img src="/images/trapezoidalGuidedPractice2.png" /></div><div class="clear" />`,
    
        [
          [
            `Determine !$A!$ and !$R!$.`,
    
            `$$\\begin{aligned}
                        A &= by + zy^2 \\\\
                        &= 6.00(2.30)+0.5(2.30)^2 \\\\
                        &= 16.445\\,\\mathsf{m^2} \\\\\\\\
                        P &= b + 2y\\sqrt{1+z^2} \\\\
                        &= 6.00 + 2(2.30)\\sqrt{1+0.5^2} \\\\
                        &= 11.143 \\,\\mathsf{m} \\\\\\\\
                        R &= A/P \\\\
                        &= \\frac{16.445}{11.143} \\\\
                        &= 1.4758 \\,\\mathsf{m}
                    \\end{aligned}$$`,
    
            `$$ A=16.445\\,\\mathsf{m^2}, R=1.4758 \\,\\mathsf{m} $$`,
          ],
    
          [
            `Determine !$Q!$ and !$v!$.`,
    
            `$$\\begin{aligned}
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.014} (1.4758)^{2/3} (1/850)^{1/2}\\\\
                        &= 3.1758\\,\\mathsf{m/s}\\\\\\\\
                        Q &= Av\\\\
                        &= 16.445\\cdot 3.1758\\\\
                        &= 52.226\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
    
            `$$ Q=52.226\\,\\mathsf{m^3/s}, v=3.1758\\,\\mathsf{m/s} $$`,
          ],
          [
            `Classify the flow.`,
    
            `$$\\begin{aligned}
                        T &= 6.00 + 2(0.5)(2.30)\\\\
                        &= 8.3000\\,\\mathsf{m}\\\\\\\\
                        N_F &= \\frac{v}{\\sqrt{g(A/T)}}\\\\
                        &= \\frac{3.1758}{\\sqrt{9.81(16.445/8.30)}}\\\\
                        &= 0.72035\\\\
                        &< 1
                    \\end{aligned}$$`,
    
            `$$ Flow is sub-critical $$`,
          ],
        ],
    
        `$$ Q=52.2\\,\\mathsf{m^3/s}, v=3.18\\,\\mathsf{m/s}, \\textsf{flow is sub-critical.} $$`,
      ],
    
      [
        `A rough formed concrete-lined trapezoidal channel !$(n=0.015)!$ has a bed width of !$3.50\\,\\mathsf{m}!$ and side slopes of !$3H\\!:2V!$ (i.e., three horizontal units for each two vertical units, or !$z=1.5!$). The bed slope is !$S=0.05\\%!$. Determine the depth !$y!$ when the discharge is !$Q=32.0\\,\\mathsf{m^3/s}!$.<br/><br/> <div class="width70"><img src="/images/trapezoidalGuidedPractice1.png" /></div><div class="clear" />`,
    
        [
          [
            `Use Manning's Equation to develop an expression for !$Q!$ as a function of !$y!$.`,
    
            `$$\\begin{aligned}
                        A &= by + zy^2 \\\\
                        &= 3.50y+1.5y^2 \\\\\\\\
    
                        P &= b + 2y\\sqrt{1+z^2} \\\\
                        &= 3.50 + 2y\\sqrt{1+1.5^2} \\\\
                        &= 3.50 + 3.6056y \\\\\\\\
    
                        Q &= \\frac 1n AR^{2/3} S^{1/2} \\\\
                        &= \\frac 1n A(A/P)^{2/3} S^{1/2} \\\\
                        &= \\frac 1n \\cdot \\frac{A^{5/3}}{P^{2/3}} \\cdot S^{1/2} \\\\
                        &= \\frac 1{0.015} \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}} \\cdot (0.0005)^{1/2} \\\\
                        &=  1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}}  \\\\
                    \\end{aligned}$$`,
    
            `$$ Q = 1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}} $$`,
          ],
    
          [
            `Find !$y!$ that yields a discharge of !$Q=32.0\\,\\mathsf{m^3/s}!$`,
    
            `We are looking for !$y!$ that satisfies: $$32.0 = 1.4907 \\cdot \\frac{\\left( 3.50y+1.5y^2\\right)^{5/3}}{\\left(3.50+3.6056y\\right)^{2/3}}$$
                    This expression cannot be solved analytically for !$y!$. Classically, this problem would be solved using 'trial-and-error', evaluating the right hand side of the expression for different values of !$y!$ until the corresponding discharge of !$Q=32.0\\,\\mathsf{m^3\\!/s}!$ is found. Trial-and-error remains a valid approach (but is time-consuming when precision is required).<br/><br/>
                    Starting with an initial guess of !$y=1.000\\,\\mathsf{m}!$:
                    $$ \\begin{aligned}
                    y=1.000\\,\\mathsf{m} & \\Rightarrow Q=5.8967\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                    y=2.00\\,\\mathsf{m} & \\Rightarrow Q=22.050\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                    y=3.00\\,\\mathsf{m} & \\Rightarrow Q=50.487\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                    y=2.50\\,\\mathsf{m} & \\Rightarrow Q=34.588\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                    y=2.25\\,\\mathsf{m} & \\Rightarrow Q=27.917\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                    y=2.375\\,\\mathsf{m} & \\Rightarrow Q=31.149\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ < 32.0, try larger $y$)} \\\\
                    y=2.4375\\,\\mathsf{m} & \\Rightarrow Q=32.843\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q$ > 32.0, try smaller $y$)} \\\\
                    y=2.40625\\,\\mathsf{m} & \\Rightarrow Q=31.990\\,\\mathsf{m^3\\!/s} \\qquad \\text{ ($Q \\approx 32.0$, DONE!)}                
                    \\end{aligned}$$
                    This is clearly quite labour intensive. The calculations can be made easier using a spreadsheet but, if you have access to a spreadsheet, the spreadsheet's Goal Seek function will get you to the required value for !$y!$ much more readily.<br/><br/>
                    Fortunately, many inexpensive scientific calculators include a numeric solver which is the most convenient way to solve the expression for !$y!$.`,
    
            `$$ y=2.4063\\,\\mathsf{m}$$`,
          ],
        ],
    
        `$$ y=2.41\\,\\mathsf{m}$$`,
      ],
    
      // ----------------------------------------------------------------------------------------------------------------
      "Circular Section",
      // ----------------------------------------------------------------------------------------------------------------
    
      [
        `A circular storm water pipe, !$1.500\\,\\mathsf{m}!$ in diameter, is laid on a slope of !$1\\!:\\!500!$. The pipe is high density polyethyline (HDPE) with design value !$n=0.013!$. Determine the pipe discharge and average flow velocity for each of the following flow depths, entering results into a table for easier comparison:        
            $$\\begin{array}{|c|c|c|c|}
                \\hline 
                \\textsf{Depth}, y & \\textsf{Velocity}, v & \\textsf{Discharge}, Q & \\qquad \\qquad \\textsf{Comments} \\qquad \\qquad  \\\\ 
                \\hline
                0.600\\,\\textsf{m} & & &   \\\\ \\hline
                0.750\\,\\textsf{m} & & &   \\textsf{Pipe flowing half full} \\\\ \\hline
                1.219\\,\\textsf{m} & & &   \\textsf{Max velocity at $y\\approx 0.8D$}\\\\ \\hline
                1.230\\,\\textsf{m} & & &   \\\\ \\hline 
                1.407\\,\\textsf{m} & & &   \\textsf{Max discharge at $y=0.938D$}\\\\ \\hline
                1.500\\,\\textsf{m} & & &   \\textsf{Pipe flowing  full} \\\\ \\hline                  
            \\end{array}$$`,
    
        [
          [
            `!$y=0.600\\,\\mathsf{m}!$ (Pipe less than half full.)`,
    
            `<img src="/images/circularGuidedPractice1UnderHalf.png" /><div class="clear" />
                    $$\\begin{aligned}
                        \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.1500}{0.750} = 78.463^{\\circ} \\\\
                        \\theta &= 2\\alpha = 156.93^{\\circ} = 2.7389\\,\\mathsf{rad}\\\\\\\\
                        A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                        &=  \\frac{(2.7389-\\sin 156.93^{\\circ})(1.500)^2}{8}\\\\
                        &= 0.66011\\,\\mathsf{m^2}\\\\\\\\
                        R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                        &= \\frac{(2.7389-\\sin 156.93^{\\circ})(1.500)}{4\\cdot 2.7389}\\\\
                        &= 0.32135\\,\\mathsf{m}\\\\\\\\
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.32135)^{2/3} (0.002)^{1/2}\\\\
                        &= 1.6140\\,\\mathsf{m/s}\\\\\\\\
                        Q &= Av\\\\
                        &= 0.66011\\cdot 1.6140\\\\
                        &= 1.0654\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
    
          [
            `!$y=0.750\\,\\mathsf{m}!$ (Pipe half full.)`,
    
            `<div class="width80"><img src="/images/circularGuidedPractice1Half.png" /></div><div class="clear" />
                    $$\\begin{aligned}
                       
                        A &= \\frac{\\pi D^2}{8} = \\frac{\\pi (1.500)^2}{8}\\\\
                        &= 0.88357\\,\\mathsf{m^2}\\\\
                        P &= \\frac{\\pi D}{2} = \\frac{\\pi(1.500)}{2}\\\\
                        &= 2.3562\\,\\mathsf{m}\\\\
                        R &= A/P = \\frac{0.88357}{2.3562}\\\\
                        &= 0.37500\\,\\mathsf{m}\\\\\\\\
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.37500)^{2/3} (0.002)^{1/2}\\\\
                        &= 1.7889\\,\\mathsf{m/s}\\\\\\\\
                        Q &= Av\\\\
                        &= 0.88357\\cdot 1.7789\\\\
                        &= 1.5806\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
    
          [
            `!$y=1.219\\,\\mathsf{m}!$ (Pipe has maximum velocity at just over 80% depth.)`,
    
            `<div class="width80"><img src="/images/circularGuidedPractice1OverHalf.png" /></div><div class="clear" />
                    
                    $$\\begin{aligned}
                        \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.46900}{0.75000} = 51.293^{\\circ} \\\\\\\\
    
                        \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 102.59^{\\circ} = 257.41^\\circ \\\\ &= 257.41^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 4.4927\\,\\mathsf{rad}\\\\\\\\
    
                        A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                        &=  \\frac{(4.4927-\\sin 257.41^\\circ)(1.500)^2}{8}\\\\
                        &= 1.5381\\,\\mathsf{m^2}\\\\\\\\
    
                        R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                        &= \\frac{(4.4927-\\sin 257.41^\\circ)(1.500)}{4\\cdot 4.4927}\\\\
                        &= 0.45646\\,\\mathsf{m}\\\\\\\\
    
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.45646)^{2/3} (0.002)^{1/2}\\\\
                        &= 2.0394\\,\\mathsf{m/s}\\\\\\\\
    
                        Q &= Av\\\\
                        &= 1.5381\\cdot 2.0394\\\\
                        &= 3.1368\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
    
          [
            `!$y=1.230\\,\\mathsf{m}!$ (Pipe has same discharge as when full at 82% depth.)`,
    
            `<div class="width80"><img src="/images/circularGuidedPractice1OverHalfPlus.png" /></div><div class="clear" />
    
                    $$\\begin{aligned}
                        \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.48000}{0.75000} = 50.208^{\\circ} \\\\\\\\
    
                        \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 100.42^{\\circ} = 259.58^\\circ \\\\ &= 259.58^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 4.5305\\,\\mathsf{rad}\\\\\\\\
    
                        A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                        &=  \\frac{(4.5305-\\sin 259.58^\\circ)(1.500)^2}{8}\\\\
                        &= 1.5508\\,\\mathsf{m^2}\\\\\\\\
    
                        R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                        &= \\frac{(4.5305-\\sin 259.58^\\circ)(1.500)}{4\\cdot 4.5305}\\\\
                        &= 0.45641\\,\\mathsf{m}\\\\\\\\
    
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.45641)^{2/3} (0.002)^{1/2}\\\\
                        &= 2.0393\\,\\mathsf{m/s}\\\\\\\\
    
                        Q &= Av\\\\
                        &= 1.5508\\cdot 2.0393\\\\
                        &= 3.1625\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
    
          [
            `!$y=1.407\\,\\mathsf{m}!$ (Pipe has maximum discharge at 93.8% depth.)`,
    
            `<div class="width80"><img src="/images/circularGuidedPractice1MaxQ.png" /></div><div class="clear" />
    
                    $$\\begin{aligned}
                        \\alpha &= \\cos^{-1}\\frac{OA}{OB} = \\cos^{-1}\\frac{0.65700}{0.75000} = 28.836^{\\circ} \\\\\\\\
    
                        \\theta &= 360^\\circ-2\\alpha = 360^\\circ- 57.673^{\\circ} = 302.33^\\circ \\\\ &= 302.33^\\circ\\cdot\\frac{\\pi}{180^\\circ} = 5.2767\\,\\mathsf{rad}\\\\\\\\
    
                        A &= \\frac{(\\theta-\\sin\\theta)D^2}{8}\\\\
                        &=  \\frac{(5.2767-\\sin 302.33^\\circ)(1.500)^2}{8}\\\\
                        &= 1.7217\\,\\mathsf{m^2}\\\\\\\\
    
                        R &= \\frac {(\\theta - \\sin\\theta)D}{4\\theta}\\\\
                        &= \\frac{(5.2767-\\sin 302.33^\\circ)(1.500)}{4\\cdot 5.2767}\\\\
                        &= 0.43505\\,\\mathsf{m}\\\\\\\\
    
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.43505)^{2/3} (0.002)^{1/2}\\\\
                        &= 1.9751\\,\\mathsf{m/s}\\\\\\\\
    
                        Q &= Av\\\\
                        &= 1.7217\\cdot 1.9751\\\\
                        &= 3.4005\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
    
          [
            `!$y=1.500\\,\\mathsf{m}!$ (Pipe is full.)`,
    
            `<div class="width80"><img src="/images/circularGuidedPractice1Full.png" /></div><div class="clear" />
    
                    $$\\begin{aligned}
                        A &= \\frac{\\pi D^2}{4} = \\frac{\\pi (1.500)^2}{4}\\\\
                        &= 1.7671\\,\\mathsf{m^2}\\\\
                        P &= \\pi D = \\pi(1.500)\\\\
                        &= 4.7124\\,\\mathsf{m}\\\\
                        R &= A/P = \\frac{1.7671}{4.7124}\\\\
                        &= 0.37500\\,\\mathsf{m}\\\\\\\\
                        v &= \\frac 1n R^{2/3}S^{1/2}\\\\
                        &= \\frac 1{0.013} (0.37500)^{2/3} (0.002)^{1/2}\\\\
                        &= 1.7889\\,\\mathsf{m/s}\\\\\\\\
                        Q &= Av\\\\
                        &= 1.7671\\cdot 1.7889\\\\
                        &= 3.1612\\,\\mathsf{m^3/s}
                    \\end{aligned}$$`,
          ],
        ],
    
        ` $$\\color{black}{\\begin{array}{|c|c|c|c|}
                \\hline 
                \\textsf{Depth}, y & \\textsf{Velocity}, v & \\textsf{Discharge}, Q & \\qquad \\qquad \\textsf{Comments} \\qquad \\qquad  \\\\ \\hline
    
                0.600\\,\\textsf{m} & \\textcolor{#008080}{1.614\\,\\mathsf{m/s}} & \\textcolor{#008080}{1.065\\,\\mathsf{m^3\\!/s}}&   \\\\ \\hline
    
                0.750\\,\\textsf{m} & \\textcolor{#008080}{1.789\\,\\mathsf{m/s}} & \\textcolor{#008080}{1.581\\,\\mathsf{m^3\\!/s}} &   \\textsf{Pipe flowing half full} \\\\ \\hline
    
                1.219\\,\\textsf{m} &  \\textcolor{#008080}{2.04 {\\scriptsize(2.0394)}\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.14\\,\\mathsf{m^3\\!/s}} &   \\textsf{Max velocity at $y\\approx 0.8D$}\\\\ \\hline
    
                1.230\\,\\textsf{m} &  \\textcolor{#008080}{2.04 {\\scriptsize(2.0393)}\\,\\mathsf{m/s}}  & \\textcolor{#008080}{3.16\\,\\mathsf{m^3\\!/s}} & \\textcolor{#008080}{\\textsf{Same discharge as flowing full}}  \\\\ \\hline 
    
                1.407\\,\\textsf{m} & \\textcolor{#008080}{1.975\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.40\\,\\mathsf{m^3\\!/s}} & \\textsf{Max discharge at $y=0.938D$}  \\\\ \\hline 
    
                1.500\\,\\textsf{m} & \\textcolor{#008080}{1.789\\,\\mathsf{m/s}} & \\textcolor{#008080}{3.16\\,\\mathsf{m^3\\!/s}}&   \\textsf{Pipe flowing  full} \\\\ \\hline                   
            \\end{array}}$$`,
      ],
    ];
    