:root {
            --bg-color: #202020;
            --btn-main: #323232;
            --accent: #76b9ff;
            --text: white;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #1a1a1a;
            font-family: 'Segoe UI', sans-serif;
            color: var(--text);
        }

        /* Container & Navigation */
        .calc-container {
            width: 350px;
            background-color: var(--bg-color);
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .header {
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 15px;
        }

        .menu-btn {
            cursor: pointer;
            font-size: 1.5rem;
            background: none;
            border: none;
            color: white;
        }

        /* Sidebar Menu */
        .sidebar {
            position: absolute;
            top: 0;
            left: -100%;
            width: 250px;
            height: 100%;
            background-color: #2d2d2d;
            transition: 0.3s;
            z-index: 10;
            padding-top: 50px;
            box-shadow: 5px 0 15px rgba(0,0,0,0.3);
        }

        .sidebar.active { left: 0; }

        .sidebar button {
            display: block;
            width: 100%;
            padding: 15px;
            text-align: left;
            background: none;
            border: none;
            color: white;
            font-size: 1rem;
            cursor: pointer;
        }

        .sidebar button:hover { background-color: #404040; }

        /* Sidebar History (Right) */
            .sidebar-right {
                position: absolute;
                top: 0;
                right: -100%; /* Hidden on the right */
                width: 280px;
                height: 100%;
                background-color: #2d2d2d;
                transition: 0.3s;
                z-index: 10;
                box-shadow: -5px 0 15px rgba(0,0,0,0.3);
            }

            .sidebar-right.active { right: 0; }

            .history-item {
                padding: 10px;
                border-bottom: 1px solid #444;
                text-align: right;
                cursor: pointer;
            }

            .history-item:hover { background-color: #3d3d3d; }

            .history-exp { font-size: 0.8rem; color: #aaa; }
            .history-res { font-size: 1.2rem; font-weight: bold; color: white; }

        /* Screens */
        .screen-panel { display: none; padding: 15px; }
        .screen-panel.active { display: block; }

        .display {
            width: 100%;
            height: 80px;
            background: transparent;
            border: none;
            text-align: right;
            font-size: 2rem;
            color: white;
            outline: none;
        }

        /* Grid Layouts */
        .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px; }
        
        button.key {
            height: 50px;
            border: none;
            background: var(--btn-main);
            color: white;
            cursor: pointer;
            border-radius: 4px;
        }

        button.key:hover { background: #454545; }

        /* Converter Inputs */
        .converter-group {
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-bottom: 20px;
        }

        input[type="number"], select {
            padding: 10px;
            background: #333;
            border: 1px solid #555;
            color: white;
            border-radius: 4px;
        }
