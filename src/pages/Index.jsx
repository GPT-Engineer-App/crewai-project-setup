import { Container, Heading, Text, VStack, Code, Divider } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" p={8}>
      <VStack spacing={8} align="start">
        <Heading as="h1">CrewAI Project Setup</Heading>
        <Text>To set up a comprehensive CrewAI project using Python, focusing on simplicity and effectiveness, I'll outline a project structure and provide basic file setups. The structure will include Flask for the backend, SQLite with SQLAlchemy for database management, and Anvil for the frontend.</Text>

        <Heading as="h2" size="lg">
          Project Structure
        </Heading>
        <Code
          p={4}
          children={`project_name/
│
├── backend/                 # Flask backend files
│   ├── app.py               # Main Flask application setup
│   ├── models.py            # Database models with SQLAlchemy
│   ├── socketio_setup.py    # Socket.IO integration
│   └── requirements.txt     # Python dependencies
│
├── frontend/                # Anvil frontend files
│   └── app.anvil.yaml       # Anvil project file (editable in Anvil editor)
│
└── README.md                # Project documentation`}
        />

        <Divider />

        <Heading as="h2" size="lg">
          Backend Files
        </Heading>
        <Heading as="h3" size="md">
          1. `app.py` - Main Flask Application Setup
        </Heading>
        <Code
          p={4}
          children={`from flask import Flask
from models import db, initialize_db
from socketio_setup import socketio

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crewai.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

initialize_db(app)
socketio.init_app(app)

@app.route('/')
def hello():
    return "Hello, CrewAI!"

if __name__ == '__main__':
    socketio.run(app, debug=True)`}
        />

        <Heading as="h3" size="md">
          2. `models.py` - Database Models with SQLAlchemy
        </Heading>
        <Code
          p={4}
          children={`from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def initialize_db(app):
    db.init_app(app)
    with app.app_context():
        db.create_all()

class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(255), nullable=False)

    def __repr__(self):
        return f'<Task {self.description}>'`}
        />

        <Heading as="h3" size="md">
          3. `socketio_setup.py` - Socket.IO Integration
        </Heading>
        <Code
          p={4}
          children={`from flask_socketio import SocketIO

socketio = SocketIO()

@socketio.on('connect')
def test_connect():
    print('Client connected')

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')`}
        />

        <Heading as="h3" size="md">
          4. `requirements.txt` - Python Dependencies
        </Heading>
        <Code
          p={4}
          children={`Flask
Flask-SocketIO
Flask-SQLAlchemy
eventlet`}
        />

        <Divider />

        <Heading as="h2" size="lg">
          Frontend Files
        </Heading>
        <Heading as="h3" size="md">
          `app.anvil.yaml` - Anvil Frontend File
        </Heading>
        <Text>This file is edited within Anvil's online editor, which provides a drag-and-drop interface to create UI components. You will link events such as button clicks in the Anvil editor to Python functions that interact with your Flask backend using Anvil's Uplink feature.</Text>

        <Divider />

        <Heading as="h2" size="lg">
          Instructions to Run the Project
        </Heading>
        <Text>
          1. <strong>Backend Setup:</strong> Navigate to the `backend` directory. Install dependencies with `pip install -r requirements.txt`. Run `python app.py` to start the Flask server.
        </Text>
        <Text>
          2. <strong>Frontend Setup:</strong> Open Anvil and import your `app.anvil.yaml` project. Use Anvil's Uplink to connect the frontend to the Flask backend.
        </Text>

        <Text>This setup provides a robust foundation for a CrewAI project with a Python-based backend and frontend, leveraging Flask's capabilities for the backend and Anvil for a web-based GUI. If you need specific details on any part of the setup or have additional requirements, feel free to ask!</Text>
      </VStack>
    </Container>
  );
};

export default Index;
