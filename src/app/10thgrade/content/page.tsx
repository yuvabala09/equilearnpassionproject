export default function TenthGradeContent() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-12 w-full">
        <h1 className="text-5xl font-bold text-center">10th Grade Math Content & Learning Page</h1>
  
        <div className="w-full max-w-5xl space-y-10">
          {/* Topic 1 */}
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-center">Topic 1: Linear Equations</h2>
            <p className="text-lg text-gray-700 text-center">
              Linear equations are the building blocks of algebra. This topic teaches you how to work with and understand equations that describe straight-line relationships.
            </p>
  
            <h3 className="text-2xl font-semibold"> What is a Linear Equation?</h3>
            <p>
              A linear equation is an equation that forms a straight line when graphed. The most common form is <strong>y = mx + b</strong>, where:
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li><strong>m</strong> is the slope and it shows the rate of change or steepness of the line</li>
              <li><strong>b</strong> is the y-intercept and the point where the line crosses the y-axis</li>
            </ul>
  
            <h3 className="text-2xl font-semibold mt-6"> Understanding Slope</h3>
            <p>
              Slope is the &quot;rise over run&quot; which is how much y changes for every change in x.
            </p>
            <p>To find slope between two points (x₁, y₁) and (x₂, y₂):</p>
            <p className="font-mono">m = (y₂ - y₁) / (x₂ - x₁)</p>
  
            <h3 className="text-2xl font-semibold mt-6"> Solving Linear Equations</h3>
            <p>Step-by-step example: Solve <strong>2x - 3 = 7</strong></p>
            <ol className="list-decimal ml-6 mt-2">
              <li>Add 3 to both sides: 2x = 10</li>
              <li>Divide both sides by 2: x = 5</li>
            </ol>
  
            <h3 className="text-2xl font-semibold mt-6"> Distributive Property</h3>
            <p>Used when the equation has parentheses: a(b + c) = ab + ac</p>
            <p>Example: Solve 3(x - 2) = 9</p>
            <ol className="list-decimal ml-6">
              <li>Distribute: 3x - 6 = 9</li>
              <li>Add 6: 3x = 15</li>
              <li>Divide: x = 5</li>
            </ol>
  
            <h3 className="text-2xl font-semibold mt-6"> Graphing Linear Equations</h3>
            <p>Steps:</p>
            <ol className="list-decimal ml-6">
              <li>Identify slope (m) and intercept (b) in y = mx + b</li>
              <li>Plot the y-intercept on the y-axis</li>
              <li>Use the slope to find another point: rise/run</li>
              <li>Draw a straight line through the points</li>
            </ol>
  
            <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
            <p>Linear equations model things like:</p>
            <ul className="list-disc ml-6">
              <li>Paychecks (Earnings = rate × hours)</li>
              <li>Distance = speed × time</li>
              <li>Cell phone plans with fixed fees and variable usage</li>
            </ul>
  
            <h3 className="text-2xl font-semibold mt-6"> Special Cases</h3>
            <p>
              Sometimes equations have:
              <ul className="list-disc ml-6">
                <li><strong>No solution:</strong> e.g., x + 2 = x + 5 (false)</li>
                <li><strong>Infinite solutions:</strong> e.g., 2x + 3 = 2x + 3 (always true)</li>
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
              You&apos;re finding the point(s) where the graphs of the equations intersect. For linear systems, this means where two lines cross.
            </p>
  
            <h3 className="text-2xl font-semibold mt-6"> Method 1: Graphing</h3>
            <p>1. Graph both equations on the same coordinate plane</p>
            <p>2. Identify the point of intersection</p>
            <p>3. That point is your solution (x, y)</p>
            <p><strong>Example:</strong> y = 2x + 1 and y = -x + 4 intersect at (1, 3)</p>
  
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
              <li><strong>No solution:</strong> parallel lines (same slope, different intercepts)</li>
              <li><strong>Infinite solutions:</strong> same line (equivalent equations)</li>
            </ul>
  
            <h3 className="text-2xl font-semibold mt-6"> Real-World Example</h3>
            <p>
              You&apos;re choosing between two job offers. One pays $100/day. The other pays $80/day plus a $100 bonus. Which job pays more after a certain number of days?
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

  <h3 className="text-2xl font-semibold">Understanding Inequality Symbols</h3>
  <ul className="list-disc ml-6">
    <li><strong>&lt; :</strong> Less than</li>
    <li><strong>&gt; :</strong> Greater than</li>
    <li><strong>&le; :</strong> Less than or equal to</li>
    <li><strong>&ge; :</strong> Greater than or equal to</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Solving Inequalities</h3>
  <p>Steps to solve inequalities:</p>
  <ol className="list-decimal ml-6">
    <li>Isolate the variable on one side of the inequality.</li>
    <li>Perform the same operation on both sides, just like equations.</li>
    <li>Flip the inequality sign if multiplying or dividing by a negative number.</li>
  </ol>
  <p><strong>Example:</strong> Solve -2x + 5 &gt; 1</p>
  <ol className="list-decimal ml-6">
    <li>Subtract 5: -2x &gt; -4</li>
    <li>Divide by -2 (flip the sign): x &lt; 2</li>
  </ol>

  <h3 className="text-2xl font-semibold mt-6">Graphing Inequalities</h3>
  <p>
    Graphing inequalities involves shading the region of the graph that satisfies the inequality. Use a dashed line for &lt; or &gt; and a solid line for &le; or &ge;.
  </p>
  <ul className="list-disc ml-6">
    <li>Choose a test point to determine which side to shade</li>
    <li>Always label the boundary line clearly</li>
    <li>Make sure to flip the inequality sign when needed</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <p>Inequalities are used in:</p>
  <ul className="list-disc ml-6">
    <li>Budgeting (e.g., spending ≤ income)</li>
    <li>Speed limits (e.g., speed &lt; 60 mph)</li>
    <li>Production constraints in factories</li>
    <li>Dietary limits or requirements</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Solve and graph x + 3 &gt; 7</li>
    <li>Solve -4x ≤ 12 and graph the solution on a number line</li>
    <li>Write an inequality to represent “at least 80 points to win”</li>
    <li>Graph y &lt; 2x + 1 and describe the shaded region</li>
    <li>Explain what happens when you divide both sides by a negative number</li>
  </ul>
</div>


{/* Topic 4 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 4: Quadratic Equations</h2>
  <p className="text-lg text-gray-700 text-center">
    Quadratic equations are equations of the form <strong>ax² + bx + c = 0</strong>. They are fundamental in algebra and have applications in physics, engineering, and economics.
  </p>

  <h3 className="text-2xl font-semibold">Standard Form of a Quadratic Equation</h3>
  <p>The standard form is <strong>ax² + bx + c = 0</strong>, where:</p>
  <ul className="list-disc ml-6">
    <li><strong>a:</strong> Coefficient of x²</li>
    <li><strong>b:</strong> Coefficient of x</li>
    <li><strong>c:</strong> Constant term</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Methods to Solve Quadratic Equations</h3>
  <p>There are three main methods:</p>
  <ol className="list-decimal ml-6">
    <li><strong>Factoring:</strong> Express the equation as (x + p)(x + q) = 0 and solve for x.</li>
    <li><strong>Completing the Square:</strong> Rewrite the equation in the form (x + d)² = e and solve for x.</li>
    <li><strong>Quadratic Formula:</strong> Use the formula <br />
      <span className="font-mono">x = (-b ± √(b² - 4ac)) / 2a</span>
    </li>
  </ol>
  <p>Choosing the right method depends on the structure of the equation and ease of simplification.</p>

  <h3 className="text-2xl font-semibold mt-6">Graphing Quadratic Equations</h3>
  <p>
    The graph of a quadratic equation is a parabola. The vertex represents the maximum or minimum point, and the axis of symmetry divides the parabola into two mirror images.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Opens upward</strong> if a &gt; 0</li>
    <li><strong>Opens downward</strong> if a &lt; 0</li>
    <li>Vertex is at <strong>(-b / 2a, f(-b / 2a))</strong></li>
    <li>The y-intercept is the value of <strong>c</strong></li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <p>Quadratic equations are used in:</p>
  <ul className="list-disc ml-6">
    <li>Projectile motion in physics</li>
    <li>Maximizing or minimizing profit and area</li>
    <li>Designing parabolic structures like bridges, arches, and satellite dishes</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Solve x² + 5x + 6 = 0 by factoring</li>
    <li>Use the quadratic formula to solve 2x² - 4x - 6 = 0</li>
    <li>Complete the square to solve x² + 6x + 5 = 0</li>
    <li>Graph y = x² - 4x + 3 and identify the vertex and axis of symmetry</li>
    <li>Write a real-world quadratic scenario involving profit or height</li>
  </ul>
</div>

{/* Topic 5 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 5: Polynomials</h2>
  <p className="text-lg text-gray-700 text-center">
    Polynomials are algebraic expressions that include variables raised to whole-number powers. They&apos;re foundational for algebra, calculus, and real-world modeling in science and engineering.
  </p>

  <h3 className="text-2xl font-semibold"> What is a Polynomial?</h3>
  <p>
    A polynomial is a mathematical expression made up of one or more terms, each consisting of a constant multiplied by a variable raised to a non-negative integer exponent.
  </p>
  <p><strong>Example:</strong> 3x² + 2x - 7 is a polynomial with three terms.</p>
  <ul className="list-disc ml-6 mt-2">
    <li><strong>Term:</strong> A piece of the polynomial separated by + or - (e.g. 3x²)</li>
    <li><strong>Degree:</strong> The highest exponent of the variable (in 3x² + 2x - 7, degree is 2)</li>
    <li><strong>Coefficient:</strong> The number multiplied by the variable (in 3x², the coefficient is 3)</li>
    <li><strong>Constant:</strong> A term without a variable (e.g. -7)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Types of Polynomials</h3>
  <ul className="list-disc ml-6">
    <li><strong>Monomial:</strong> One term (e.g. 5x)</li>
    <li><strong>Binomial:</strong> Two terms (e.g. x² + 3)</li>
    <li><strong>Trinomial:</strong> Three terms (e.g. x² + 2x + 1)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Adding & Subtracting Polynomials</h3>
  <p>Combine like terms (terms with the same variable and exponent):</p>
  <p><strong>Example:</strong> (3x² + 2x - 5) + (x² - 4x + 7) = 4x² - 2x + 2</p>

  <h3 className="text-2xl font-semibold mt-6"> Multiplying Polynomials</h3>
  <p>Use the distributive property or FOIL method (for binomials):</p>
  <p><strong>Example:</strong> (x + 3)(x + 2)</p>
  <p>= x² + 2x + 3x + 6 = x² + 5x + 6</p>

  <h3 className="text-2xl font-semibold mt-6"> Special Products</h3>
  <ul className="list-disc ml-6">
    <li><strong>Square of a Binomial:</strong> (a + b)² = a² + 2ab + b²</li>
    <li><strong>Difference of Squares:</strong> a² - b² = (a - b)(a + b)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Factoring Polynomials</h3>
  <p>Factoring is the reverse of expanding. It helps solve equations and simplify expressions.</p>
  <ul className="list-disc ml-6">
    <li><strong>Common Factor:</strong> Factor out the greatest common factor (GCF)</li>
    <li><strong>Trinomials:</strong> Find two numbers that multiply to give ac and add to b (in ax² + bx + c)</li>
    <li><strong>Difference of Squares:</strong> Use identity a² - b² = (a - b)(a + b)</li>
  </ul>
  <p><strong>Example:</strong> Factor x² + 5x + 6 → (x + 2)(x + 3)</p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Polynomials appear in many real-world situations, including:</p>
  <ul className="list-disc ml-6">
    <li>Calculating area (e.g., length × width with variables)</li>
    <li>Modeling profit and cost in business</li>
    <li>Describing motion or growth (e.g., population models)</li>
    <li>Physics formulas that involve quadratic or cubic relationships</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Add: (2x² + 3x - 4) + (x² - 2x + 7)</li>
    <li>Subtract: (5x² - 2x + 1) - (3x² + x - 6)</li>
    <li>Multiply: (x + 4)(x - 3)</li>
    <li>Factor: x² + 6x + 9</li>
    <li>Simplify: (2x - 3)(x + 5)</li>
  </ul>
</div>
{/* Topic 6 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 6: Functions & Graphing</h2>
  <p className="text-lg text-gray-700 text-center">
    Understanding functions and their graphs is fundamental for analyzing relationships in math and the real world. Functions describe how one quantity depends on another.
  </p>

  <h3 className="text-2xl font-semibold">Function Notation</h3>
  <p>
    Function notation is a way to name functions and evaluate them for specific inputs. Instead of using y, we write f(x), which means “the value of function f at x.”
  </p>
  <ul className="list-disc ml-6">
    <li><strong>f(x):</strong> Read as “f of x”</li>
    <li><strong>Evaluating:</strong> Replace x with a number to find the output, e.g., if f(x) = 2x + 3, then f(4) = 11</li>
    <li>Helps clearly define input-output relationships</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Types of Functions</h3>
  <p>
    Different functions model different kinds of behavior. Key types include:
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Linear:</strong> Forms a straight line; constant rate of change</li>
    <li><strong>Quadratic:</strong> Forms a parabola; involves x²; includes max or min values</li>
    <li><strong>Exponential:</strong> Grows or decays rapidly; variable in the exponent</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Graphing Functions</h3>
  <p>
    Graphing allows you to visualize how a function behaves. Key features to identify:
  </p>
  <ul className="list-disc ml-6">
    <li><strong>x-intercept(s):</strong> Where the graph crosses the x-axis</li>
    <li><strong>y-intercept:</strong> Where the graph crosses the y-axis</li>
    <li><strong>Domain:</strong> All possible x-values</li>
    <li><strong>Range:</strong> All possible y-values</li>
    <li><strong>End behavior:</strong> Describes what happens to y as x gets very large or very small</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Transformations of Functions</h3>
  <p>
    Transformations change the appearance of a graph without changing its basic shape.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Shifts:</strong> Move the graph left, right, up, or down</li>
    <li><strong>Reflections:</strong> Flip the graph over the x- or y-axis</li>
    <li><strong>Stretches/Compressions:</strong> Make the graph narrower or wider</li>
  </ul>
  <p>Transformations help model changes in real-world behavior and patterns over time.</p>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <ul className="list-disc ml-6">
    <li>Modeling population growth or decline</li>
    <li>Predicting profit or cost in business</li>
    <li>Tracking speed and motion in physics</li>
    <li>Understanding visual data in graphs and charts</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Evaluate f(x) = 3x - 2 for x = 5</li>
    <li>Identify the type of function from a given equation</li>
    <li>Graph y = x² - 4 and label the vertex and axis of symmetry</li>
    <li>Describe how the graph of f(x) = x² changes if it becomes f(x) = (x - 3)² + 2</li>
    <li>Compare linear vs. exponential growth with sample values</li>
  </ul>
</div>

{/* Topic 7 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 7: Exponential Functions</h2>
  <p className="text-lg text-gray-700 text-center">
    Exponential functions are equations where the variable is in the exponent, such as <strong>y = a * b^x</strong>. These functions model rapid growth or decay in real-world scenarios.
  </p>

  <h3 className="text-2xl font-semibold">Understanding Exponential Growth and Decay</h3>
  <p>
    Exponential growth occurs when a quantity increases by the same percentage over equal time intervals. Exponential decay occurs when a quantity decreases by the same percentage over equal time intervals.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Growth:</strong> y = a * (1 + r)^t</li>
    <li><strong>Decay:</strong> y = a * (1 - r)^t</li>
  </ul>
  <p>
    In both cases, <strong>a</strong> is the initial value, <strong>r</strong> is the rate of growth or decay (as a decimal), and <strong>t</strong> is time.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Graphing Exponential Functions</h3>
  <p>
    Exponential functions have a curve that increases or decreases rapidly. The graph has a horizontal asymptote, which the curve approaches but never touches.
  </p>
  <ul className="list-disc ml-6">
    <li>Growth curves rise from left to right</li>
    <li>Decay curves fall from left to right</li>
    <li>The y-intercept is always the initial value <strong>a</strong></li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <p>Exponential functions are used in:</p>
  <ul className="list-disc ml-6">
    <li>Population growth</li>
    <li>Radioactive decay</li>
    <li>Compound interest in finance</li>
    <li>Spread of diseases or information</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Identify whether a given equation represents growth or decay</li>
    <li>Calculate the value of an investment using compound interest</li>
    <li>Graph y = 2 * (1.5)^x and describe its shape</li>
    <li>Given a population model y = 500 * (0.98)^t, determine the population after 10 years</li>
    <li>Find the asymptote of the function y = 4 * (0.5)^x</li>
  </ul>
</div>

{/* Topic 8 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 8: Geometry Foundations</h2>
  <p className="text-lg text-gray-700 text-center">
    Geometry foundations lay the groundwork for understanding space, shape, and logical reasoning. These basic principles are essential for exploring everything from angles and triangles to circles and 3D solids.
  </p>

  <h3 className="text-2xl font-semibold"> Points, Lines, and Planes</h3>
  <p>
    These are the undefined terms of geometry. They can&apos;t be precisely defined using other geometric words but are understood intuitively.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Point:</strong> Represents a location in space; has no size, only position. Usually labeled with a capital letter.</li>
    <li><strong>Line:</strong> A straight path that extends forever in both directions; made of infinite points; named by any two points on it.</li>
    <li><strong>Plane:</strong> A flat surface that extends infinitely in all directions; named using three non-collinear points or a script capital letter.</li>
  </ul>
  <p>Understanding these helps build intuition for how all other shapes and angles are constructed.</p>

  <h3 className="text-2xl font-semibold mt-6"> Angles and Their Relationships</h3>
  <p>
    Angles are formed when two rays share a common endpoint (called the vertex). Knowing angle relationships is key to solving for unknown values and understanding geometric structure.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Acute:</strong> less than 90°</li>
    <li><strong>Right:</strong> exactly 90°</li>
    <li><strong>Obtuse:</strong> between 90° and 180°</li>
    <li><strong>Straight:</strong> exactly 180°</li>
  </ul>
  <p>Special angle relationships:</p>
  <ul className="list-disc ml-6">
    <li><strong>Vertical Angles:</strong> Opposite angles formed by two intersecting lines. Always equal.</li>
    <li><strong>Adjacent Angles:</strong> Share a vertex and a side but do not overlap.</li>
    <li><strong>Complementary:</strong> Add up to 90°</li>
    <li><strong>Supplementary:</strong> Add up to 180°</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Parallel and Perpendicular Lines</h3>
  <p>
    Understanding how lines interact is essential for building consistent shapes and understanding symmetry in design and architecture.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Parallel Lines:</strong> Never intersect and are always the same distance apart.</li>
    <li><strong>Perpendicular Lines:</strong> Intersect at 90° angles.</li>
    <li><strong>Transversal:</strong> A line that cuts across two or more lines.</li>
  </ul>
  <p>When a transversal crosses parallel lines, it creates angle pairs like:</p>
  <ul className="list-disc ml-6">
    <li>Corresponding angles (equal)</li>
    <li>Alternate interior angles (equal)</li>
    <li>Alternate exterior angles (equal)</li>
    <li>Same-side interior angles (supplementary)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Coordinate Geometry</h3>
  <p>
    This combines algebra and geometry by plotting points, lines, and shapes on a coordinate plane. It allows us to analyze distances, midpoints, and slopes algebraically.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Distance Formula:</strong> d = √[(x₂ - x₁)² + (y₂ - y₁)²]</li>
    <li><strong>Midpoint Formula:</strong> M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)</li>
    <li><strong>Slope Formula:</strong> m = (y₂ - y₁)/(x₂ - x₁)</li>
  </ul>
  <p>Coordinate geometry is great for proving geometric properties with numbers instead of just logic or visuals.</p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <ul className="list-disc ml-6">
    <li>Designing buildings and structures</li>
    <li>Plotting data points in statistics</li>
    <li>Mapping and navigation (GPS)</li>
    <li>Computer graphics and animation</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Name a line, a point, and a plane in a diagram</li>
    <li>Classify angle types: 45°, 120°, 90°, 180°</li>
    <li>Identify vertical and adjacent angles in a diagram</li>
    <li>Find the distance and midpoint between (2, 3) and (6, 7)</li>
    <li>Given m∠1 = 40°, find the measure of its supplementary angle</li>
    <li>Draw a transversal cutting two parallel lines and label all angles</li>
  </ul>
</div>
{/* Topic 9 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 9: Congruence and Transformations</h2>
  <p className="text-lg text-gray-700 text-center">
    Congruence and transformations help us understand how shapes move and relate to each other. These foundational ideas are crucial for everything from design and engineering to mathematical proof and reasoning.
  </p>

  <h3 className="text-2xl font-semibold">Transformations</h3>
  <p>
    Transformations show how shapes can move or change on a plane. Understanding these is key to identifying congruent shapes and solving design-related problems.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Translation:</strong> Slides a figure without rotating or flipping it. All points move the same distance in the same direction.</li>
    <li><strong>Rotation:</strong> Turns a figure around a fixed point (the center of rotation).</li>
    <li><strong>Reflection:</strong> Flips a figure over a line, creating a mirror image.</li>
    <li><strong>Dilation:</strong> Enlarges or reduces a figure with respect to a center point and scale factor (non-rigid transformation).</li>
  </ul>
  <p>Rigid transformations (translation, rotation, reflection) preserve size and shape, while dilations change size but preserve shape.</p>

  <h3 className="text-2xl font-semibold mt-6">Congruent Figures</h3>
  <p>
    Two figures are congruent if they are the same size and shape. Rigid transformations can be used to prove congruence.
  </p>
  <ul className="list-disc ml-6">
    <li>If one shape can be transformed into another using only rigid motions, they are congruent.</li>
    <li>Congruence is symbolized by the ≅ symbol.</li>
  </ul>
  <p>This concept is important for solving problems involving matching shapes, pattern design, and geometric proof.</p>

  <h3 className="text-2xl font-semibold mt-6">Construction</h3>
  <p>
    Geometric constructions use tools like a compass and straightedge to draw shapes accurately. These hands-on methods build deep understanding of geometric relationships.
  </p>
  <ul className="list-disc ml-6">
    <li>Constructing perpendicular bisectors</li>
    <li>Copying angles and segments</li>
    <li>Drawing congruent triangles</li>
    <li>Bisecting angles and constructing angle congruence</li>
  </ul>
  <p>Construction skills reinforce logic, precision, and problem-solving in geometry.</p>

  <h3 className="text-2xl font-semibold mt-6">Triangle Congruence</h3>
  <p>
    Triangles are congruent when all their sides and angles match. However, shortcuts make it easier to prove triangle congruence without checking all six parts.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>SSS (Side-Side-Side):</strong> All three sides are equal.</li>
    <li><strong>SAS (Side-Angle-Side):</strong> Two sides and the included angle are equal.</li>
    <li><strong>ASA (Angle-Side-Angle):</strong> Two angles and the included side are equal.</li>
    <li><strong>AAS (Angle-Angle-Side):</strong> Two angles and a non-included side are equal.</li>
    <li><strong>HL (Hypotenuse-Leg):</strong> For right triangles, the hypotenuse and one leg are equal.</li>
  </ul>
  <p>Triangle congruence helps prove relationships in geometry and supports real-world design validation.</p>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <ul className="list-disc ml-6">
    <li>Designing symmetrical logos and patterns</li>
    <li>Engineering parts that must fit together perfectly</li>
    <li>Robotics movement and path planning</li>
    <li>Architecture and construction layouts</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Perform a translation, rotation, and reflection on a triangle and describe the result</li>
    <li>Determine whether two figures are congruent using transformation rules</li>
    <li>Construct an equilateral triangle using a compass and straightedge</li>
    <li>Use SSS, SAS, ASA, AAS, or HL to prove two triangles are congruent</li>
    <li>Explain why dilation does not preserve congruence</li>
    <li>Identify which transformation(s) map one figure onto another</li>
  </ul>
</div>

{/* Topic 10 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 10: Trigonometry Basics</h2>
  <p className="text-lg text-gray-700 text-center">
    Trigonometry is the study of relationships between the angles and sides of triangles. It&apos;s widely used in fields like physics, engineering, and astronomy.
  </p>

  <h3 className="text-2xl font-semibold">Understanding Trigonometric Ratios</h3>
  <p>
    Trigonometric ratios are based on the sides of a right triangle. The three primary ratios are:
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Sine (sin):</strong> Opposite / Hypotenuse</li>
    <li><strong>Cosine (cos):</strong> Adjacent / Hypotenuse</li>
    <li><strong>Tangent (tan):</strong> Opposite / Adjacent</li>
  </ul>
  <p>
    These ratios allow us to calculate missing side lengths and angles when dealing with right triangles.
  </p>

  <h3 className="text-2xl font-semibold mt-6">The Pythagorean Theorem</h3>
  <p>
    The Pythagorean Theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides:
  </p>
  <p className="font-mono">a² + b² = c²</p>
  <p>
    This fundamental relationship is often used alongside trigonometric ratios to solve for unknown sides and verify triangle properties.
  </p>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <p>Trigonometry is used in:</p>
  <ul className="list-disc ml-6">
    <li>Calculating heights and distances</li>
    <li>Engineering and construction</li>
    <li>Modeling waves and sound in physics</li>
    <li>Astronomy to measure distances between celestial bodies</li>
    <li>Navigation and GPS systems</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Find sin(θ), cos(θ), and tan(θ) in a given right triangle</li>
    <li>Solve for a missing side using the Pythagorean Theorem</li>
    <li>Use trig ratios to find a missing angle</li>
    <li>Apply trigonometry to find the height of a tree given the angle of elevation and distance</li>
    <li>Label all sides of a triangle and write the correct trig ratios</li>
  </ul>
</div>

 {/* Topic 11 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 11: Rational & Radical Expressions</h2>
  <p className="text-lg text-gray-700 text-center">
    Rational and radical expressions extend algebra into fractions with polynomials and roots. Mastering these skills is essential for solving complex equations and applying algebra in science and engineering.
  </p>

  <h3 className="text-2xl font-semibold">Simplifying Rational Expressions</h3>
  <p>
    Rational expressions are fractions where the numerator and/or denominator are polynomials. Simplifying involves factoring and canceling common factors.
  </p>
  <ul className="list-disc ml-6">
    <li>Factor both numerator and denominator</li>
    <li>Cancel out common factors</li>
    <li>State restrictions: values that make the denominator zero are excluded</li>
  </ul>
  <p><strong>Example:</strong> (x² - 9) / (x² - x - 6) simplifies to (x + 3)/(x - 3), x ≠ 3, -2</p>

  <h3 className="text-2xl font-semibold mt-6">Solving Rational Equations</h3>
  <p>
    Rational equations contain one or more rational expressions. Solve by finding a common denominator, multiplying to eliminate fractions, and checking for excluded values.
  </p>
  <ul className="list-disc ml-6">
    <li>Multiply both sides by the least common denominator (LCD)</li>
    <li>Simplify and solve like a regular equation</li>
    <li>Check for extraneous solutions (values that make any denominator zero)</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Radical Expressions</h3>
  <p>
    Radical expressions involve roots, such as square roots or cube roots. Simplifying these is essential for solving equations and preparing for topics like quadratic formulas and geometry.
  </p>
  <ul className="list-disc ml-6">
    <li>√a × √b = √(ab)</li>
    <li>√(a²) = |a|</li>
    <li>Rationalizing the denominator means rewriting the expression so there are no radicals in the denominator</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Operations with Radicals</h3>
  <p>
    You can add, subtract, multiply, and divide radical expressions, but only like radicals can be added or subtracted.
  </p>
  <ul className="list-disc ml-6">
    <li>√2 + √2 = 2√2</li>
    <li>√5 + √3 can't be simplified further</li>
    <li>Use distributive property and FOIL when multiplying binomials with radicals</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Real-World Applications</h3>
  <ul className="list-disc ml-6">
    <li>Physics formulas with inverse and square root relationships</li>
    <li>Geometry problems involving distances and areas</li>
    <li>Engineering calculations that involve changing rates or volumes</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6">Practice Problems</h3>
  <ul className="list-disc ml-6">
    <li>Simplify (x² - 4) / (x² - x - 6) and state restrictions</li>
    <li>Solve (1/x) + (1/2) = (1/3) and check for extraneous solutions</li>
    <li>Simplify √(50) and express in simplest radical form</li>
    <li>Rationalize the denominator of 5 / √3</li>
    <li>Multiply (√2 + 3)(√2 - 3)</li>
  </ul>
</div>
</div>
      </div>
    );
  }