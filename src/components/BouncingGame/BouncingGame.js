import React, { useEffect, useState, useRef } from "react";
import backGround from '../../assets/background.jpg';
import ball from '../../assets/ball.png';
import block from '../../assets/block.png';
import ground from '../../assets/ground.png'
import './BouncingGame.css';


function BouncingGame() {
    const GRAVITY = 0.5;
    const JUMP_STRENGTH = -10;
    const BALL_SIZE = 35;
    const GROUND_HEIGHT = 600;
    const OBSTACLE_SIZE = 50;

    const [ballY, setBallY] = useState(50);
    const [ballX, setBallX] = useState(50);
    const [ballVelocity, setBallVelocity] = useState(0);
    const [obstacles, setObstacles] = useState([{ x: 600, height: 1, passed: false }]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [backgroundX, setBackgroundX] = useState(0);
    const [groundX, setGroundX] = useState(0);
    const [ballRotation, setBallRotation] = useState(0);
    const [ballSpeed, setSpeed] = useState(5);
    const [isJumping, setIsJumping] = useState(false);
    const [coins, setCoins] = useState([ { x: 600, collected: false } ]);

    const gameAreaRef = useRef(null);

    useEffect(() => {
        if (!gameOver) {
            const speedIncreaseInterval = setInterval(() => {
                setSpeed((prevValue) => prevValue + 0.02);
            }, 100);
            return () => clearInterval(speedIncreaseInterval);
        }
    }, [gameOver]);

    useEffect(() => {
        if (!gameOver) {
            const rotationInterval = setInterval(() => {
                setBallRotation(prev => (prev + (ballVelocity < 0 ? ballSpeed * 2 : ballSpeed * 4)) % 360);
            }, 20);

            return () => clearInterval(rotationInterval);
        }
    }, [gameOver, ballSpeed, ballVelocity]);

    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === " " && !gameOver && !isJumping && ballY + BALL_SIZE >= GROUND_HEIGHT) {
            jump();
        }
    };

    const handleTap = () => {
        if (!gameOver && !isJumping && ballY + BALL_SIZE >= GROUND_HEIGHT) {
            jump();
        }
    };

        window.addEventListener("keydown", handleKeyDown);

        // Ensure gameAreaRef is defined before adding listener
        if (gameAreaRef.current) {
            gameAreaRef.current.addEventListener("click", handleTap);
        }

        return () => {
          window.removeEventListener("keydown", handleKeyDown);
          if (gameAreaRef.current) {
              gameAreaRef.current.removeEventListener("click", handleTap);
          }
        };
    }, [gameOver, isJumping, ballY]);

    useEffect(() => {
        if (!gameOver) {
            const scrollInterval = setInterval(() => {
                setGroundX(prev => (prev - ballSpeed) % 600);
                setBackgroundX(prev => (prev - ballSpeed * 0.5) % 600);
            }, 20);

            return () => clearInterval(scrollInterval);
        }
    }, [gameOver, ballSpeed]);

    const updateGame = () => {
        setBallY((prevY) => {
            const newY = prevY + ballVelocity;

            if (newY + BALL_SIZE >= GROUND_HEIGHT) {
                setIsJumping(false);
                return GROUND_HEIGHT - BALL_SIZE; 
            }
            return newY; 
        });

        setBallVelocity((prevVelocity) => prevVelocity + GRAVITY);

        setObstacles((prevObstacles) => {
            return prevObstacles.map((obstacle) => {
                const newX = obstacle.x - ballSpeed;

                if (newX + OBSTACLE_SIZE < ballX && !obstacle.passed) {
                    setScore((prevScore) => prevScore + 1);
                    return { ...obstacle, x: newX, passed: true };
                }
                return { ...obstacle, x: newX };
            });
        });

        setObstacles((prevObstacles) =>
          prevObstacles.filter(obstacle => obstacle.x + OBSTACLE_SIZE > 0)
      );

      // Use up-to-date obstacles from state
      obstacles.forEach((obstacle) => {
          const obstacleTop = GROUND_HEIGHT - (obstacle.height * OBSTACLE_SIZE);
          if (
              ballX + BALL_SIZE >= obstacle.x &&
              ballX < obstacle.x + OBSTACLE_SIZE &&
              ballY + BALL_SIZE >= obstacleTop
          ) {
              setGameOver(true);
          }
      });
  };

    useEffect(() => {
        if (!gameOver) {
            const gameInterval = setInterval(() => {
                updateGame();
            }, 20);

            return () => clearInterval(gameInterval);
        }
    }, [ballY, obstacles, gameOver]);

    useEffect(() => {
        let lastTimeout;
        
        const createObstacle = () => {
            if (!gameOver) {
                // Create new obstacle
                const newObstacle = {
                    x: 600 + Math.random() * 200,
                    height: Math.random() < 0.5 ? 2 : 1,
                    passed: false,
                };
                
                setObstacles(prevObstacles => [...prevObstacles, newObstacle]);
                
                const minDelay = 1500;   
                const maxDelay = 3000;   
                const variableDelay = minDelay + (Math.random() * Math.random() * maxDelay);
                
                lastTimeout = setTimeout(createObstacle, variableDelay);
            }
        };
        
        createObstacle();
        
        return () => {
            if (lastTimeout) {
                clearTimeout(lastTimeout);
            }
        };
    }, [gameOver]);


    useEffect(() => {
        setCoins((prevCoins) => {
            return prevCoins.map(coin => {
                const newX = coin.x - ballSpeed;
                
                // Check if coin is collected
                if (!coin.collected && 
                    ballX < coin.x + 30 && 
                    ballX + BALL_SIZE > coin.x && 
                    ballY < coin.y + 30 && 
                    ballY + BALL_SIZE > coin.y) {
                    setScore(prev => prev + 5); 
                    return { ...coin, collected: true };
                }
                return { ...coin, x: newX };
            }).filter(coin => coin.x > -30 && !coin.collected);
        });
    }, [ballX, ballY, ballSpeed]);
    
    useEffect(() => {
        let lastTimeout;
        
        const createCoin = () => {
            if (!gameOver) {
                const newCoin = {
                    x: 600 + Math.random() * 200,
                    y: Math.random() * (GROUND_HEIGHT - 100) + 50, 
                    collected: false
                };
                
                setCoins(prevCoins => [...prevCoins, newCoin]);
                
                const minDelay = 2000;   
                const maxDelay = 4000;   
                const variableDelay = minDelay + Math.random() * (maxDelay - minDelay);
                
                lastTimeout = setTimeout(createCoin, variableDelay);
            }
        };
        
        createCoin();
        
        return () => {
            if (lastTimeout) {
                clearTimeout(lastTimeout);
            }
        };
    }, [gameOver]);



    const jump = () => {
        setBallVelocity(JUMP_STRENGTH);
        setIsJumping(true);
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#f0f0f0",
            }}
        >
            <div
                style={{
                    width: "800px", 
                    height: "600px",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <div
                    ref={gameAreaRef}
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        
                    }}
                    onClick={() => {
                        if (gameOver) {
                            setGameOver(false);
                            setScore(0);
                            setObstacles([{ x: 600, height: 1, passed: false }]);
                            setBallY(GROUND_HEIGHT - BALL_SIZE);
                            setBallX(50);
                            setBallVelocity(0);
                            setBackgroundX(0);
                            setGroundX(0);
                            setBallRotation(0);
                            setSpeed(5);
                        }
                    }}
                >
                    {/* Scrolling Background */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: backgroundX,
                            width: "1200px",
                            height: "100%",
                            backgroundImage: `url(${backGround})`,
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "600px 100%",
                        }}
                    />
                    {/* Ball */}
                    <div
                        style={{
                            position: "absolute",
                            left: ballX,
                            top: ballY,
                            width: BALL_SIZE,
                            height: BALL_SIZE,
                            backgroundImage: `url(${ball})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            borderRadius: "50%",
                            zIndex: 2,
                            transform: `rotate(${ballRotation}deg)`,
                            transition: "transform 0.02s linear",
                        }}
                    />
                    {/* Obstacles */}
                    {obstacles.map((obstacle, index) => (
                        <div key={index}>
                            {/* Base block */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: obstacle.x,
                                    bottom: 10,
                                    width: OBSTACLE_SIZE,
                                    height: OBSTACLE_SIZE,
                                    backgroundImage: `url(${block})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    zIndex: 2,
                                }}
                            />
                            {/* Stacked block */}
                            {obstacle.height === 2 && (
                                <div
                                    style={{
                                        position: "absolute",
                                        left: obstacle.x,
                                        bottom: OBSTACLE_SIZE + 10,
                                        width: OBSTACLE_SIZE,
                                        height: OBSTACLE_SIZE,
                                        backgroundImage: `url(${block})`,
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                        zIndex: 2,
                                    }}
                                />
                            )}
                        </div>
                    ))}
                    {/* Scrolling Ground */}
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: groundX,
                            width: "1200px",
                            height: "50px",
                            backgroundImage: `url(${ground})`,
                            backgroundRepeat: "repeat-x",
                            backgroundSize: "600px 100%",
                            zIndex: 1,
                        }}
                    />
                    {/* Score */}
                    <div style={{ 
                        position: "absolute", 
                        top: 10, 
                        left: 10, 
                        fontSize: "24px",
                        zIndex: 3,
                        fontFamily: "'Pixelify Sans', sans-serif",
                        textAlign: "center",
                        animation: "float 3s ease-in-out 2s infinite alternate, textGlow 2s ease-in-out infinite alternate",
                        textShadow: "0px 0px 20px rgb(255, 255, 255)",
                        letterSpacing: "6px"
                    }}>
                        Score: {score}
                    </div>
                    {/* Game Over Screen */}
                    {gameOver && (
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "36px",
                            color: "#ff0033",
                            zIndex: 4,
                            fontFamily: "'Pixelify Sans', sans-serif",
                            textAlign: "center",
                            animation: "3s ease-in-out 2s infinite alternate, textGlow 2s ease-in-out infinite alternate",
                            textShadow: "0px 0px 10px #cc00ff, 0px 0px 20px #cc00ff, 0px 0px 30px #cc00ff, 0px 0px 40px #ff00ff, 0px 0px 50px #ff00ff", // Purple neon glow effect
                            letterSpacing: "6px"
                        }}
                    >
                        Game Over
                        <div style={{ fontSize: "24px", marginTop: "20px" }}>
                            Tap to restart
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default BouncingGame;
