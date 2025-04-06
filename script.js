const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;

function butterflyCurve(t) {
    let x = Math.sin(t) * (Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5));
        let y = Math.cos(t) * (Math.exp(Math.cos(t)) - 2 * Math.cos(4 * t) - Math.pow(Math.sin(t / 12), 5));
            return { x, y };
            }

            function flowerCurve(theta) {
                let r = 2 * Math.sin(4 * theta); // Flower equation from Desmos
                    let x = r * Math.cos(theta);
                        let y = r * Math.sin(theta);
                            return { x, y };
                            }

                            function draw() {
                                ctx.clearRect(0, 0, canvas.width, canvas.height);

                                    let centerX = canvas.width/2;
                                        let centerY = canvas.height/4;
                                            let scale = 50; 

                                                // Draw Butterfly Curve
                                                    ctx.beginPath();
                                                        for (let t = 0; t < time; t += 0.001) {
                                                                let point = butterflyCurve(t);
                                                                        let x = centerX + scale * point.x;
                                                                                let y = centerY - scale * point.y;
                                                                                        ctx.lineTo(x, y);
                                                                                            }
                                                                                                ctx.strokeStyle = `hsl(${time * 10}, 100%, 60%)`;
                                                                                                    ctx.lineWidth = 2;
                                                                                                        ctx.stroke();

                                                                                                            // Draw Flower Curve
                                                                                                                ctx.beginPath();
                                                                                                                    for (let theta = 0; theta < time; theta += 0.01) {
                                                                                                                            let point = flowerCurve(theta);
                                                                                                                                    let x = centerX + scale * point.x;
                                                                                                                                            let y = centerY - scale * point.y + 250; // Shift flower down
                                                                                                                                                    ctx.lineTo(x, y);
                                                                                                                                                        }
                                                                                                                                                            ctx.strokeStyle = `hsl(${(time * 15) % 360}, 100%, 50%)`;
                                                                                                                                                                ctx.lineWidth = 2;
                                                                                                                                                                    ctx.stroke();

                                                                                                                                                                        time += 0.02;
                                                                                                                                                                            if (time > 12 * Math.PI) {
                                                                                                                                                                                    time = 0;
                                                                                                                                                                                        }

                                                                                                                                                                                            requestAnimationFrame(draw);
                                                                                                                                                                                            }

                                                                                                                                                                                            draw();