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

  <h3 className="text-2xl font-semibold"> Understanding Inequality Symbols</h3>
  <ul className="list-disc ml-6">
    <li><strong>&lt;</strong>: Less than</li>
    <li><strong>&gt;</strong>: Greater than</li>
    <li><strong>&le;</strong>: Less than or equal to</li>
    <li><strong>&ge;</strong>: Greater than or equal to</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Solving Inequalities</h3>
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

  <h3 className="text-2xl font-semibold mt-6"> Graphing Inequalities</h3>
  <p>
    Graphing inequalities involves shading the region of the graph that satisfies the inequality. Use a dashed line for &lt; or &gt; and a solid line for &le; or &ge;.
  </p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Inequalities are used in:</p>
  <ul className="list-disc ml-6">
    <li>Budgeting (e.g., spending &le; income)</li>
    <li>Speed limits (e.g., speed &lt; 60 mph)</li>
    <li>Production constraints in factories</li>
  </ul>
</div>

{/* Topic 4 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 4: Quadratic Equations</h2>
  <p className="text-lg text-gray-700 text-center">
    Quadratic equations are equations of the form ax² + bx + c = 0. They are fundamental in algebra and have applications in physics, engineering, and economics.
  </p>

  <h3 className="text-2xl font-semibold"> Standard Form of a Quadratic Equation</h3>
  <p>The standard form is ax² + bx + c = 0, where:</p>
  <ul className="list-disc ml-6">
    <li><strong>a</strong>: Coefficient of x²</li>
    <li><strong>b</strong>: Coefficient of x</li>
    <li><strong>c</strong>: Constant term</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Methods to Solve Quadratic Equations</h3>
  <p>There are three main methods:</p>
  <ol className="list-decimal ml-6">
    <li><strong>Factoring:</strong> Express the equation as (x + p)(x + q) = 0 and solve for x.</li>
    <li><strong>Completing the Square:</strong> Rewrite the equation in the form (x + d)² = e and solve for x.</li>
    <li><strong>Quadratic Formula:</strong> Use the formula x = (-b &plusmn; √(b² - 4ac)) / 2a.</li>
  </ol>

  <h3 className="text-2xl font-semibold mt-6"> Graphing Quadratic Equations</h3>
  <p>
    The graph of a quadratic equation is a parabola. The vertex represents the maximum or minimum point, and the axis of symmetry divides the parabola into two mirror images.
  </p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Quadratic equations are used in:</p>
  <ul className="list-disc ml-6">
    <li>Projectile motion in physics</li>
    <li>Maximizing profit in business</li>
    <li>Designing parabolic structures like bridges</li>
  </ul>
</div>
{/* Topic 5 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 5: Quadratic Equations</h2>
  <p className="text-lg text-gray-700 text-center">
    Quadratic equations are equations of the form <strong>ax² + bx + c = 0</strong>. Their graphs form parabolas, and they show up in physics, engineering, and real-life situations involving area, velocity, and more.
  </p>

  <h3 className="text-2xl font-semibold"> Understanding the Standard Form</h3>
  <p>
    The standard form of a quadratic equation is <strong>ax² + bx + c = 0</strong>, where:
  </p>
  <ul className="list-disc ml-6">
    <li><strong>a</strong>: Coefficient of x²</li>
    <li><strong>b</strong>: Coefficient of x</li>
    <li><strong>c</strong>: Constant term</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Solving Quadratic Equations</h3>
  <p>There are three main methods to solve quadratic equations:</p>
  <ol className="list-decimal ml-6">
    <li><strong>Factoring:</strong> Rewrite the equation as (x + p)(x + q) = 0 and solve for x.</li>
    <li><strong>Completing the Square:</strong> Rewrite the equation in the form (x + d)² = e and solve for x.</li>
    <li><strong>Quadratic Formula:</strong> Use the formula x = (-b &plusmn; √(b² - 4ac)) / 2a.</li>
  </ol>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Quadratic equations are used in:</p>
  <ul className="list-disc ml-6">
    <li>Modeling projectile motion</li>
    <li>Maximizing profit in business scenarios</li>
    <li>Designing parabolic structures like bridges and antennas</li>
  </ul>
</div>

{/* Topic 6 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 6: Exponential Functions</h2>
  <p className="text-lg text-gray-700 text-center">
    Exponential functions are equations where the variable is in the exponent, such as <strong>y = a * b^x</strong>. These functions model rapid growth or decay in real-world scenarios.
  </p>

  <h3 className="text-2xl font-semibold"> Understanding Exponential Growth and Decay</h3>
  <p>
    Exponential growth occurs when a quantity increases by the same percentage over equal time intervals. Exponential decay occurs when a quantity decreases by the same percentage over equal time intervals.
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Growth:</strong> y = a * (1 + r)^t</li>
    <li><strong>Decay:</strong> y = a * (1 - r)^t</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Graphing Exponential Functions</h3>
  <p>
    Exponential functions have a curve that increases or decreases rapidly. The graph has a horizontal asymptote, which the curve approaches but never touches.
  </p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Exponential functions are used in:</p>
  <ul className="list-disc ml-6">
    <li>Population growth</li>
    <li>Radioactive decay</li>
    <li>Compound interest in finance</li>
  </ul>
</div>
{/* Topic 7 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 7: Geometry Basics</h2>
  <p className="text-lg text-gray-700 text-center">
    Geometry is the branch of math that deals with shapes, sizes, angles, and properties of space. It&apos;s essential for understanding the physical world and designing everything from architecture to electronics.
  </p>

  <h3 className="text-2xl font-semibold"> Key Concepts in Geometry</h3>
  <ul className="list-disc ml-6">
    <li><strong>Points:</strong> A location in space with no size or dimension.</li>
    <li><strong>Lines:</strong> A straight path that extends infinitely in both directions.</li>
    <li><strong>Angles:</strong> Formed by two rays meeting at a common endpoint.</li>
    <li><strong>Shapes:</strong> Two-dimensional figures like triangles, squares, and circles.</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Measuring Angles</h3>
  <p>Angles are measured in degrees (°). Common types of angles include:</p>
  <ul className="list-disc ml-6">
    <li><strong>Acute:</strong> Less than 90°</li>
    <li><strong>Right:</strong> Exactly 90°</li>
    <li><strong>Obtuse:</strong> Greater than 90° but less than 180°</li>
    <li><strong>Straight:</strong> Exactly 180°</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Geometry is used in:</p>
  <ul className="list-disc ml-6">
    <li>Architecture and construction</li>
    <li>Designing electronic circuits</li>
    <li>Understanding maps and navigation</li>
  </ul>
</div>

{/* Topic 8 */}
<div className="space-y-6">
  <h2 className="text-3xl font-semibold text-center">Topic 8: Trigonometry Basics</h2>
  <p className="text-lg text-gray-700 text-center">
    Trigonometry is the study of relationships between the angles and sides of triangles. It&apos;s widely used in fields like physics, engineering, and astronomy.
  </p>

  <h3 className="text-2xl font-semibold"> Understanding Trigonometric Ratios</h3>
  <p>
    Trigonometric ratios are based on the sides of a right triangle. The three primary ratios are:
  </p>
  <ul className="list-disc ml-6">
    <li><strong>Sine (sin):</strong> Opposite / Hypotenuse</li>
    <li><strong>Cosine (cos):</strong> Adjacent / Hypotenuse</li>
    <li><strong>Tangent (tan):</strong> Opposite / Adjacent</li>
  </ul>

  <h3 className="text-2xl font-semibold mt-6"> The Pythagorean Theorem</h3>
  <p>
    The Pythagorean Theorem states that in a right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides:
  </p>
  <p className="font-mono">a² + b² = c²</p>

  <h3 className="text-2xl font-semibold mt-6"> Real-World Applications</h3>
  <p>Trigonometry is used in:</p>
  <ul className="list-disc ml-6">
    <li>Calculating heights and distances</li>
    <li>Engineering and construction</li>
    <li>Modeling waves in physics</li>
  </ul>
</div>
</div>
      </div>
    );
  }