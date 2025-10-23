pipeline {
    agent any

    environment {
        BACKEND_IMAGE = "product-service:latest"
        FRONTEND_IMAGE = "frontend:latest"
        KUBE_CONFIG = "/home/jenkins/.kube/config"  // if using local kubeconfig
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Venkat8062/Cosmicart'
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend/product-service') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend/frontend-app') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                dir('k8s') {
                    sh 'kubectl apply -f product-deployment.yaml'
                    sh 'kubectl apply -f frontend-deployment.yaml'
                }
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check logs."
        }
    }
}
