

export default function TenthGradeContent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-12 w-full">
      <h1 className="text-5xl font-bold text-center">10th Grade Math Content & Learning Page</h1>

      <div className="w-full max-w-5xl space-y-10">
        {/* Topic 1 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 1: Linear Equations</h2>
          <p className="text-lg text-gray-700 text-center">
            {'Linear equations are the building blocks of algebra. This topic teaches you how to work with and understand equations that describe straight-line relationships.'}
          </p>

          <h3 className="text-2xl font-semibold"> What is a Linear Equation?</h3>
          <p>
            {'A linear equation is an equation that forms a straight line when graphed. The most common form is <strong>y = mx + b</strong>, where:'}
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li><strong>m</strong> {'is the slope and it shows the rate of change or steepness of the line'}</li>
            <li><strong>b</strong> {'is the y-intercept and the point where the line crosses the y-axis'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Understanding Slope</h3>
          <p>
            Slope is the "rise over run" which is how much y changes for every change in x.
          </p>
          <p>{'To find slope between two points (x₁, y₁) and (x₂, y₂):'}</p>
          <p className="font-mono">{'m = (y₂ - y₁) / (x₂ - x₁)'}</p>

          <h3 className="text-2xl font-semibold mt-6"> Solving Linear Equations</h3>
          <p>Step-by-step example: Solve <strong>2x - 3 = 7</strong></p>
          <ol className="list-decimal ml-6 mt-2">
            <li>Add 3 to both sides: 2x = 10</li>
            <li>Divide both sides by 2: x = 5</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Distributive Property</h3>
          <p>{'Used when the equation has parentheses: a(b + c) = ab + ac'}</p>
          <p>{'Example: Solve 3(x - 2) = 9'}</p>
          <ol className="list-decimal ml-6">
            <li>Distribute: 3x - 6 = 9</li>
            <li>Add 6: 3x = 15</li>
            <li>Divide: x = 5</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Graphing Linear Equations</h3>
          <p>Steps:</p>
          <ol className="list-decimal ml-6">
            <li>{'Identify slope (m) and intercept (b) in y = mx + b'}</li>
            <li>Plot the y-intercept on the y-axis</li>
            <li>Use the slope to find another point: rise/run</li>
            <li>Draw a straight line through the points</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
          <p>Linear equations model things like:</p>
          <ul className="list-disc ml-6">
            <li>{'Paychecks (Earnings = rate × hours)'}</li>
            <li>Distance = speed × time</li>
            <li>Cell phone plans with fixed fees and variable usage</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Special Cases</h3>
          <p>
            Sometimes equations have:
            <ul className="list-disc ml-6">
              <li><strong>No solution:</strong> e.g., x + 2 = x + 5 {'(false)'}</li>
              <li><strong>Infinite solutions:</strong> e.g., 2x + 3 = 2x + 3 {'(always true)'}</li>
            </ul>
          </p>
        </div>

        {/* Topic 2 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 2: Systems of Equations</h2>
          <p className="text-lg text-gray-700 text-center">
            A system of equations is when two or more equations are considered together. The goal is to find a set of values that satisfies all equations at the same time.
          </p>

          <h3 className="text-2xl font-semibold"> What Does It Mean to Solve a System?</h3>
          <p>
            {"You're finding the point(s) where the graphs of the equations intersect. For linear systems, this means where two lines cross."}
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Method 1: Graphing</h3>
          <p>1. Graph both equations on the same coordinate plane</p>
          <p>2. Identify the point of intersection</p>
          <p>{'3. That point is your solution (x, y)'}</p>
          <p><strong>Example:</strong> y = 2x + 1 and y = -x + 4 intersect at{' (1, 3)'}</p>

          <h3 className="text-2xl font-semibold mt-6"> Method 2: Substitution</h3>
          <ol className="list-decimal ml-6">
            <li>Solve one equation for one variable</li>
            <li>Substitute it into the other equation</li>
            <li>Solve for the second variable</li>
            <li>Plug back in to find the first variable</li>
          </ol>
          <p><strong>Example:</strong> y = 2x and x + y = 6 → x + 2x = 6 → x = 2, y = 4</p>

          <h3 className="text-2xl font-semibold mt-6"> Method 3: Elimination</h3>
          <ol className="list-decimal ml-6">
            <li>Align the equations</li>
            <li>Add or subtract them to eliminate one variable</li>
            <li>Solve the resulting equation</li>
            <li>Back-substitute to find the other variable</li>
          </ol>
          <p><strong>Example:</strong> 2x + y = 8 and -2x + y = 4 → Add: 2y = 12 → y = 6 → x = 1</p>

          <h3 className="text-2xl font-semibold mt-6"> Special Cases</h3>
          <ul className="list-disc ml-6">
            <li><strong>No solution:</strong> parallel lines {'(same slope, different intercepts)'}</li>
            <li><strong>Infinite solutions:</strong> same line {'(equivalent equations)'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Example</h3>
          <p>
            You’re choosing between two job offers. One pays $100/day. The other pays $80/day plus a $100 bonus. Which job pays more after a certain number of days?
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Solve by substitution: y = 3x, x + y = 12</li>
            <li>Solve by elimination: x - y = 4, x + y = 10</li>
            <li>Graph: y = 2x - 1 and y = -x + 5</li>
            <li>Word problem: Compare two cell plans with different fees and rates</li>
          </ul>
        </div>
        {/* Topic 3 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 3: Inequalities</h2>
          <p className="text-lg text-gray-700 text-center">
            Inequalities are used to compare values and show the range of possible solutions instead of just one exact number. They are essential for real-world decisions where outcomes vary.
          </p>

          <h3 className="text-2xl font-semibold"> Understanding Inequality Symbols</h3>
          <ul className="list-disc ml-6">
            <li><strong>&lt;</strong> means "less than"</li>
            <li><strong>&gt;</strong> means "greater than"</li>
            <li><strong>&le;</strong> means "less than or equal to"</li>
            <li><strong>&ge;</strong> means "greater than or equal to"</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Solving One-Step Inequalities</h3>
          <p>Example: Solve <strong>x + 3 &lt; 7</strong></p>
          <ol className="list-decimal ml-6">
            <li>Subtract 3 from both sides: x &lt; 4</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Solving Two-Step Inequalities</h3>
          <p>Example: Solve <strong>2x - 5 ≥ 9</strong></p>
          <ol className="list-decimal ml-6">
            <li>Add 5 to both sides: 2x ≥ 14</li>
            <li>Divide by 2: x ≥ 7</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Special Rule: Flip the Sign!</h3>
          <p>
            If you multiply or divide both sides of an inequality by a negative number, <strong>flip the inequality symbol</strong>.
          </p>
          <p>Example: -2x &lt; 8 → Divide by -2 → x &gt; -4</p>

          <h3 className="text-2xl font-semibold mt-6"> Graphing Solutions on a Number Line</h3>
          <ul className="list-disc ml-6">
            <li>Use an open circle for &lt; or &gt;</li>
            <li>Use a closed circle for ≤ or ≥</li>
            <li>Shade to the left for "less than"; right for "greater than"</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Compound Inequalities</h3>
          <p>
            Compound inequalities combine two inequalities in one statement using "and" or "or".
          </p>
          <p>Example{' (AND)'}: 2 &lt; x ≤ 5 → x is between 2 and 5</p>
          <p>Example{' (OR)'}: x &lt; -3 or x &gt; 2 → x is less than -3 or greater than 2</p>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Example</h3>
          <p>
            You must be at least 13 years old and under 18 to qualify for a teen program. This is written as: <strong>13 ≤ x &lt; 18</strong>
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Solve and graph: x - 4 &gt; 2</li>
            <li>Solve and graph: -3x ≤ 9</li>
            <li>Solve: 1 &lt; 2x + 3 ≤ 7</li>
            <li>Write an inequality: You must spend less than $30</li>
          </ul>
                {/* Topic 4 */}
                <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 4: Functions</h2>
          <p className="text-lg text-gray-700 text-center">
            A function is a rule that assigns exactly one output value for every input value. Understanding functions is essential to mastering algebra and interpreting graphs.
          </p>

          <h3 className="text-2xl font-semibold"> Function Notation</h3>
          <p>Instead of using y, we often use {'f(x)'} to represent the output when x is the input. For example, if f(x) = 2x + 3, then:</p>
          <ul className="list-disc ml-6">
            <li>{'f(1) = 2(1) + 3 = 5'}</li>
            <li>{'f(-2) = 2(-2) + 3 = -1'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Understanding Domain and Range</h3>
          <p>
            - The <strong>domain</strong> is the set of all possible input values {'(x-values)'}.<br />
            - The <strong>range</strong> is the set of all possible output values {'(y-values or f(x))'}.
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Testing Functions</h3>
          <p>
            Use the <strong>vertical line test</strong> on a graph: if a vertical line touches the graph more than once, it's not a function.
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Evaluating Functions</h3>
          <p>Given a function {'f(x)'}, you substitute the x-value into the expression.</p>
          <p><strong>Example:</strong> If{' f(x)'} = x² - 4x + 7, find{' f(3)'}</p>
          <p>{'f(3)'} = 3² - {'4(3)'} + 7 = 9 - 12 + 7 = 4</p>

          <h3 className="text-2xl font-semibold mt-6"> Graphing Functions</h3>
          <p>Make a table of values, plot the points, and connect them.</p>
          <ul className="list-disc ml-6">
            <li>Start by choosing x-values</li>
            <li>Find{' f(x)'} for each x</li>
            <li>Plot the ordered pairs{' (x, f(x))'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Linear vs. Nonlinear Functions</h3>
          <ul className="list-disc ml-6">
            <li>Linear functions form straight lines{' (constant rate of change)'}</li>
            <li>Nonlinear functions {'(e.g. quadratic)'} form curves or other shapes</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Examples</h3>
          <ul className="list-disc ml-6">
            <li>Temperature conversion: {'F(C)'} = 1.8C + 32</li>
            <li>Cost calculation: {'C(x) '}= 10x + 50 {'(x is number of items)'}</li>
            <li>Distance-time relationships:{' d(t)'} = 60t</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>{'If f(x) = 2x - 5, find f(4)'}</li>
            <li>{'Determine the domain and range of f(x)'} = x²</li>
            <li>Graph the function: {'f(x)'} = -x + 2</li>
            <li>Is the graph of a circle a function? Why or why not?</li>
            <li>Write a real-life situation that can be modeled by a function</li>
          </ul>
                  {/* Topic 5 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 5: Quadratic Equations</h2>
          <p className="text-lg text-gray-700 text-center">
            Quadratic equations are equations of the form <strong>ax² + bx + c = 0</strong>. Their graphs form parabolas, and they show up in physics, engineering, and real-life situations involving area, velocity, and more.
          </p>

          <h3 className="text-2xl font-semibold"> Understanding the Standard Form</h3>
          <p>
            A quadratic equation is written as: <strong>y = ax² + bx + c</strong>.<br />
            - <strong>a</strong> determines the direction and width of the parabola<br />
            - <strong>b</strong> affects the position of the vertex<br />
            - <strong>c</strong> is the y-intercept
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Solving by Factoring</h3>
          <p>Example: Solve x² + 5x + 6 = 0</p>
          <ol className="list-decimal ml-6">
            <li>Find two numbers that multiply to 6 and add to 5 → 2 and 3</li>
            <li>Factor: {'(x + 2)(x + 3)'} = 0</li>
            <li>Set each factor to 0: x + 2 = 0 or x + 3 = 0</li>
            <li>Solutions: x = -2, x = -3</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Solving Using the Quadratic Formula</h3>
          <p>
            For any quadratic equation <strong>ax² + bx + c = 0</strong>, use the formula:
          </p>
          <p className="font-mono text-lg">x ={' [-b ± √(b² - 4ac)]'} / {'(2a)'}</p>
          <p>
            This works for all quadratics, even those that can’t be factored.
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Graphing Quadratic Functions</h3>
          <p>The graph of a quadratic function is a parabola. Key features include:</p>
          <ul className="list-disc ml-6">
            <li><strong>Vertex:</strong> the highest or lowest point of the curve</li>
            <li><strong>Axis of symmetry:</strong> a vertical line that divides the parabola evenly</li>
            <li><strong>Direction:</strong> opens up if a &gt; 0, down if a &lt; 0</li>
          </ul>
          <p>Example: y = x² - 4x + 3 → vertex at {'(2, -1)'}, opens upward</p>

          <h3 className="text-2xl font-semibold mt-6"> Completing the Square</h3>
          <p>Used to convert to vertex form or solve when factoring isn’t easy.</p>
          <p>Example: x² + 6x + 5</p>
          <ol className="list-decimal ml-6">
            <li>Take half of 6 {'(which is 3)'}, then square it → 9</li>
            <li>Add and subtract 9: x² + 6x + 9 - 4</li>
            <li>Group and factor: {'(x + 3)'}² - 4</li>
          </ol>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
          <ul className="list-disc ml-6">
            <li>Projectile motion {'(height vs. time)'}</li>
            <li>Area problems with constraints</li>
            <li>Maximizing revenue or profit in business</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Solve: x² - 7x + 10 = 0 by factoring</li>
            <li>Solve using quadratic formula: 2x² + 3x - 5 = 0</li>
            <li>Convert to vertex form: x² + 4x + 1</li>
            <li>Graph: y = -x² + 6x - 8</li>
            <li>Write a quadratic function for a ball thrown into the air reaching a max height of 10m</li>
          </ul>
          {/* Topic 6 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 6: Exponents & Polynomials</h2>
          <p className="text-lg text-gray-700 text-center">
            Exponents and polynomials are essential algebraic tools. Exponents help simplify repeated multiplication, and polynomials are algebraic expressions made up of multiple terms.
          </p>

          <h3 className="text-2xl font-semibold"> Understanding Exponents</h3>
          <p>Exponents tell us how many times to multiply a number by itself.</p>
          <ul className="list-disc ml-6">
            <li>2³ = 2 × 2 × 2 = 8</li>
            <li>5² = 5 × 5 = 25</li>
            <li>a⁴ = a × a × a × a</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Rules of Exponents</h3>
          <ul className="list-disc ml-6">
            <li><strong>Product Rule:</strong> {'a^m × a^n = a^(m+n)'}</li>
            <li><strong>Quotient Rule:</strong> {'a^m ÷ a^n = a^(m−n)'}</li>
            <li><strong>Power of a Power:</strong> {'(a^m)^n = a^(mn)'}</li>
            <li><strong>Negative Exponents:</strong> {'a^(-n) = 1 / a^n'}</li>
            <li><strong>Zero Exponent:</strong> a⁰ = 1 {'(if a ≠ 0)'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> What Are Polynomials?</h3>
          <p>A polynomial is a mathematical expression involving a sum of powers in one or more variables multiplied by coefficients.</p>
          <p>Examples:</p>
          <ul className="list-disc ml-6">
            <li>3x² + 2x - 5</li>
            <li>7a³ - 4a² + a - 1</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Adding & Subtracting Polynomials</h3>
          <p>Combine like terms {'(same variable and exponent)'}:</p>
          <p>{'(4x² + 3x - 2) + (x² - 5x + 6)'} = 5x² - 2x + 4</p>

          <h3 className="text-2xl font-semibold mt-6"> Multiplying Polynomials {'(FOIL Method)'}</h3>
          <p>Use distributive property for binomials:</p>
          <p>{'(x + 3)(x + 2)'} = x² + 2x + 3x + 6 = x² + 5x + 6</p>

          <h3 className="text-2xl font-semibold mt-6"> Factoring Polynomials</h3>
          <p>Reverse the multiplication process to find factors.</p>
          <p>Example: x² + 5x + 6 = {'(x + 2)(x + 3)'}</p>
          <p>Methods include:</p>
          <ul className="list-disc ml-6">
            <li>Factoring trinomials</li>
            <li>Factoring by grouping</li>
            <li>Difference of squares: a² - b² = {'(a - b)(a + b)'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
          <ul className="list-disc ml-6">
            <li>Modeling area {'(e.g., A = l × w with polynomial expressions)'}</li>
            <li>Profit and cost analysis in business</li>
            <li>Population and growth modeling with exponentials</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Simplify: 3x³ × 2x²</li>
            <li>Evaluate: {'(2a²b)(3ab²)'}</li>
            <li>Add: {'(2x² + 3x - 1) + (x² - x + 4)'}</li>
            <li>Multiply: {'(x + 4)(x - 2)'}</li>
            <li>Factor: x² - 9</li>
          </ul>
          {/* Topic 7 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 7: Geometry Basics</h2>
          <p className="text-lg text-gray-700 text-center">
            Geometry is the branch of math that deals with shapes, sizes, angles, and properties of space. It's essential for understanding the physical world and designing everything from architecture to electronics.
          </p>

          <h3 className="text-2xl font-semibold"> Types of Angles</h3>
          <ul className="list-disc ml-6">
            <li><strong>Acute:</strong> less than 90°</li>
            <li><strong>Right:</strong> exactly 90°</li>
            <li><strong>Obtuse:</strong> between 90° and 180°</li>
            <li><strong>Straight:</strong> exactly 180°</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Triangle Properties</h3>
          <ul className="list-disc ml-6">
            <li>The sum of interior angles in a triangle is always 180°</li>
            <li>An equilateral triangle has three equal sides and three equal angles</li>
            <li>An isosceles triangle has two equal sides</li>
            <li>A right triangle has one 90° angle and follows the Pythagorean Theorem</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Pythagorean Theorem</h3>
          <p>
            In a right triangle: <strong>a² + b² = c²</strong> where <strong>c</strong> is the hypotenuse
          </p>
          <p>Example: If a = 3 and b = 4, then c² = 9 + 16 = 25 → c = 5</p>

          <h3 className="text-2xl font-semibold mt-6"> Perimeter and Area</h3>
          <ul className="list-disc ml-6">
            <li><strong>Square:</strong> Area = s², Perimeter = 4s</li>
            <li><strong>Rectangle:</strong> Area = l × w, Perimeter = 2l + 2w</li>
            <li><strong>Triangle:</strong> Area = ½ × base × height</li>
            <li><strong>Circle:</strong> Area = πr², Circumference = 2πr</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Volume of 3D Shapes</h3>
          <ul className="list-disc ml-6">
            <li><strong>Cube:</strong> V = s³</li>
            <li><strong>Rectangular Prism:</strong> V = l × w × h</li>
            <li><strong>Cylinder:</strong> V = πr²h</li>
            <li><strong>Pyramid:</strong> V = {'(1/3)'} × base area × height</li>
            <li><strong>Sphere:</strong> V = {'(4/3)'}πr³</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
          <ul className="list-disc ml-6">
            <li>Construction and architecture</li>
            <li>Computer graphics and game design</li>
            <li>Navigation and mapping</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Find the missing side of a right triangle with legs 6 and 8</li>
            <li>Calculate the area of a triangle with base 10 and height 7</li>
            <li>What’s the perimeter of a rectangle with length 9 and width 4?</li>
            <li>Find the volume of a cylinder with radius 3 and height 10</li>
            <li>Identify the type of triangle with angles 45°, 45°, and 90°</li>
          </ul>
        </div>
        {/* Topic 8 */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-center">Topic 8: Statistics & Probability</h2>
          <p className="text-lg text-gray-700 text-center">
            Statistics and probability help us make sense of data and predict outcomes. In this topic, you'll learn how to collect, organize, interpret, and analyze information in a meaningful way.
          </p>

          <h3 className="text-2xl font-semibold"> Measures of Central Tendency</h3>
          <ul className="list-disc ml-6">
            <li><strong>Mean:</strong> the average{' (add all values, divide by the number of values)'}</li>
            <li><strong>Median:</strong> the middle value when data is ordered</li>
            <li><strong>Mode:</strong> the most frequent value{'(s)'}</li>
            <li><strong>Range:</strong> difference between highest and lowest values</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Graphing and Displaying Data</h3>
          <ul className="list-disc ml-6">
            <li><strong>Bar Graphs:</strong> compare quantities across categories</li>
            <li><strong>Histograms:</strong> show frequency of data intervals</li>
            <li><strong>Box Plots:</strong> display median, quartiles, and outliers</li>
            <li><strong>Dot Plots:</strong> show frequency of individual values</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Understanding Spread and Variability</h3>
          <p>
            These concepts help measure how data is distributed:
            <ul className="list-disc ml-6">
              <li><strong>Interquartile Range {'(IQR)'}:</strong> Q3 - Q1</li>
              <li><strong>Standard Deviation:</strong> measures how far data is from the mean</li>
            </ul>
          </p>

          <h3 className="text-2xl font-semibold mt-6"> Probability Basics</h3>
          <p>
            Probability is the likelihood of an event happening. It's written as a fraction between 0 and 1:
          </p>
          <p className="font-mono">P{'(event)'} = number of favorable outcomes / total number of outcomes</p>
          <p>Example: P{'(rolling a 3 on a die) '}= 1/6</p>

          <h3 className="text-2xl font-semibold mt-6"> Compound Events</h3>
          <ul className="list-disc ml-6">
            <li><strong>Independent Events:</strong> one event doesn’t affect the other {'(e.g. coin flips)'}</li>
            <li><strong>Dependent Events:</strong> one event affects the outcome of the next</li>
            <li><strong>"And" probability {'(independent)'}:</strong> {'P(A and B) = P(A) × P(B)'}</li>
            <li><strong>"Or" probability {'(mutually exclusive)'}:</strong> {'P(A or B) = P(A) + P(B)'}</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
          <ul className="list-disc ml-6">
            <li>Weather forecasting</li>
            <li>Medical studies and risk assessments</li>
            <li>Game strategies and predictions</li>
            <li>Business analytics and marketing</li>
          </ul>

          <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
          <ul className="list-disc ml-6">
            <li>Find the mean, median, mode, and range of: 4, 7, 7, 10, 13</li>
            <li>Draw a histogram for this data: 2, 3, 3, 4, 4, 4, 5, 6</li>
            <li>Calculate the probability of drawing a red card from a standard deck</li>
            <li>A bag has 3 red, 2 blue, and 5 green marbles. What’s {'P(green)'}?</li>
            <li>What’s the probability of flipping two heads in a row?</li>
          </ul>
        </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
