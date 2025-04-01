export default function Grade10CurriculumPage() {
    return (
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center">10th Grade Math Timeline</h1>
        <p className="mt-4 text-lg text-center">
          Click on each topic to explore the key concepts you'll learn throughout 10th grade math, along with why they're important.
        </p>
  
        <div className="mt-8 space-y-6">
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 1. Geometry Foundations</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Points, Lines, and Planes:</strong> Understand the undefined terms that are the basis of geometry. Learning how these interact sets the groundwork for understanding shapes and space.</li>
              <li><strong>Angles and Their Relationships:</strong> Explore how angles relate to each other and how they form geometric figures. This helps in solving for unknown values and recognizing patterns.</li>
              <li><strong>Parallel and Perpendicular Lines:</strong> Study the properties and behaviors of these lines to understand symmetry and construction of consistent shapes.</li>
              <li><strong>Coordinate Geometry:</strong> Combine algebra with geometry by plotting shapes on a grid and solving spatial problems algebraically.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 2. Congruence and Transformations</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Transformations:</strong> Learn how figures move on a plane. Understanding rigid and non-rigid transformations helps in comparing shapes and solving real-world design problems.</li>
              <li><strong>Congruent Figures:</strong> Identify when two shapes are exactly the same in size and shape, and prove it using transformation rules.</li>
              <li><strong>Construction:</strong> Develop skills using tools like a compass and straightedge to create precise figures. These techniques enhance understanding of geometric principles.</li>
              <li><strong>Triangle Congruence:</strong> Apply congruence shortcuts to determine when triangles are identical. Useful in proofs and practical geometry applications.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 3. Similarity, Right Triangles & Trigonometry</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Similar Figures:</strong> Examine figures that have the same shape but different sizes using scale factors. This supports understanding of proportions and modeling.</li>
              <li><strong>Triangle Similarity Criteria:</strong> Learn the specific conditions that prove triangles are similar. These ideas are central to solving real-world and abstract problems.</li>
              <li><strong>Trigonometric Ratios:</strong> Introduce sine, cosine, and tangent. These functions help in measuring heights, distances, and angles in architecture and physics.</li>
              <li><strong>Solving Right Triangles:</strong> Combine trig functions and the Pythagorean Theorem to find missing side lengths and angles in right triangles.</li>
              <li><strong>Applications of Trigonometry:</strong> Use trig to solve elevation and depression problems, laying the foundation for advanced STEM topics.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 4. Algebra II Essentials</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Linear Equations & Inequalities:</strong> Build fluency in solving and graphing equations. These tools help model and solve real-world problems.</li>
              <li><strong>Systems of Equations:</strong> Use multiple methods to solve equations involving two or more variables. This is useful for analyzing business and scientific data.</li>
              <li><strong>Quadratic Functions:</strong> Learn how to graph parabolas, solve quadratic equations, and explore their real-world applications in physics and engineering.</li>
              <li><strong>Polynomials:</strong> Understand expressions involving multiple terms and how to manipulate them algebraically. Critical for advanced algebra and calculus preparation.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 5. Functions & Graphing</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Function Notation:</strong> Learn to express and evaluate functions, a key step toward higher-level math.</li>
              <li><strong>Types of Functions:</strong> Study linear, quadratic, and exponential functions to understand different growth patterns and models.</li>
              <li><strong>Graphing Functions:</strong> Translate equations into visual graphs and analyze intercepts, symmetry, and behavior of functions.</li>
              <li><strong>Transformations of Functions:</strong> Explore how graphs change with shifts, stretches, and reflections—essential for modeling and understanding changes over time.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 6. Rational & Radical Expressions</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Simplifying Rational Expressions:</strong> Work with fractions made of polynomials and identify values that make them undefined.</li>
              <li><strong>Solving Rational Equations:</strong> Use algebra to find solutions and understand when those solutions don't work due to restrictions.</li>
              <li><strong>Radical Expressions:</strong> Learn to simplify square roots and other radicals, preparing you for advanced algebra and geometry problems.</li>
              <li><strong>Operations with Radicals:</strong> Perform algebraic operations with roots, important for understanding physical formulas and rates of change.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 7. Data, Statistics & Probability</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Descriptive Statistics:</strong> Use measures like mean and standard deviation to summarize and analyze data sets.</li>
              <li><strong>Data Displays:</strong> Learn how to create and interpret visual representations of data for better communication and analysis.</li>
              <li><strong>Probability Rules:</strong> Analyze different types of events and calculate likelihoods, important for decision-making and risk assessment.</li>
              <li><strong>Normal Distributions:</strong> Understand patterns in large data sets and how bell curves help in predicting outcomes.</li>
            </ul>
          </details>
  
          <details className="bg-gray-100 p-4 rounded-lg shadow">
            <summary className="cursor-pointer font-semibold text-lg"> 8. Mathematical Modeling</summary>
            <ul className="mt-2 list-disc list-inside space-y-2">
              <li><strong>Constructing Models:</strong> Convert real-life situations into mathematical language and equations.</li>
              <li><strong>Interpreting Models:</strong> Analyze graphs and equations to draw conclusions and make predictions.</li>
              <li><strong>Modeling with Functions:</strong> Use different types of functions to represent trends and behaviors in real-world data.</li>
              <li><strong>Evaluating Assumptions:</strong> Critically assess the limits and reliability of mathematical models in practical contexts.</li>
            </ul>
          </details>
  
        </div>
      </div>
    );
  }
  