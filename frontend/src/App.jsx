import { useState } from "react";
import "./App.css";

function App() {
  const [showNodeLibrary, setShowNodeLibrary] = useState(false);

  const nodeCategories = [
    {
      name: "INPUT",
      nodes: [
        "Dataset",
        "CSV",
        "Image",
        "Text",
      ],
    },
    {
      name: "PROCESSING",
      nodes: [
        "Normalize",
        "Filter",
        "Split",
        "Transform",
      ],
    },
    {
      name: "MODELS",
      nodes: [
        "Linear Regression",
        "Logistic Regression",
        "Random Forest",
        "XGBoost",
        "CNN",
        "LSTM",
        "Transformer",
      ],
    },
    {
      name: "EVALUATION",
      nodes: [
        "Accuracy",
        "Precision",
        "Recall",
        "F1 Score",
      ],
    },
    {
      name: "OUTPUT",
      nodes: [
        "Prediction",
        "Export",
      ],
    },
  ];

  return (
    <div className="app">

      {/* ================= TOP BAR ================= */}

      <header className="topbar">

        <div className="logo">
          ◈ ModelFlow
        </div>

        <div className="workflow-name">
          My Workflow
        </div>

        <div className="topbar-actions">
          <button>Save</button>
          <button>Run</button>
        </div>

      </header>


      {/* ================= MAIN AREA ================= */}

      <div className="main-layout">

        {/* ================= LEFT RAIL ================= */}

        <aside className="left-rail">

          <button title="Create">
            +
          </button>

          <button title="Search">
            ⌕
          </button>

          <button title="Projects">
            ▣
          </button>

        </aside>


        {/* ================= WORKSPACE ================= */}

        <main className="workspace">

          <div className="canvas">

            <h2>Workflow Canvas</h2>


            {/* ================= CANVAS TOOLBAR ================= */}

            <div className="canvas-toolbar">

              <button className="canvas-tool"
                onClick={() => setShowNodeLibrary(true)}>
                <span className="tool-icon">+</span>
              </button>

              <button className="canvas-tool">
                <span className="tool-icon">↶</span>
              </button>

              <button className="canvas-tool">
                <span className="tool-icon">↷</span>
              </button>

              <button className="canvas-tool">
                <span className="tool-icon">⟳</span>
              </button>

            </div>


            {/* ================= NODE LIBRARY ================= */}

            {showNodeLibrary && (

              <div className="node-library">

                <div className="node-library-header">

                  <span>
                    Add Node
                  </span>

                  <button
                    className="node-library-close"
                    onClick={() =>
                      setShowNodeLibrary(false)
                    }
                  >
                    ×
                  </button>

                </div>


                {/* Search */}

                <div className="node-search">

                  <span>
                    ⌕
                  </span>

                  <input
                    type="text"
                    placeholder="Search nodes..."
                  />

                </div>


                {/* Categories */}

                <div className="node-library-content">

                  {nodeCategories.map((category) => (

                    <div
                      className="node-category"
                      key={category.name}
                    >

                      <div className="node-category-title">
                        {category.name}
                      </div>


                      {category.nodes.map((node) => (

                        <button
                          className="node-option"
                          key={node}
                        >
                          {node}
                        </button>

                      ))}

                    </div>

                  ))}

                </div>

              </div>

            )}

          </div>

        </main>

      </div>

    </div>
  );
}

export default App;