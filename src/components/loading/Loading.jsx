import { motion } from "framer-motion";
import styled from "styled-components";

function Loading( props ) {
    if (!props.show){
        return null
    }

    const Loader = styled(motion.div)`
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: transparent;
        color: white;
        display: flex;
        padding: 10%;
        min-height: ${props.min_height};
        flex-direction: row;
        align-items: center;
        gap: 1rem;
        justify-content: center;
    `;
    const bouceTransition = {
        y: {
            duration: 0.4,
            yoyo: Infinity,
            ease: "easeOut",
          },
          backgroundColor: {
            duration: 0,
            repeat: Infinity,
            ease: "easeOut",
            repeatDelay: 0.8,
          },
    }
    const motionDiv = 3;
  return (
    <>
        <Loader>
            {
                [...Array(motionDiv)].map((i) => {
                    return (
                        <>
                            <motion.div
                                key={i}
                                animate={{
                                    y: ["100%", "-100%"]
                                }}
                                initial={{
                                    x: 0
                                }}
                                transition={ bouceTransition }
                                style={{
                                    height: "1rem",
                                    background: "#E81B63",
                                    width: "1rem",
                                    borderRadius: "50%",
                                }}
                            />
                        </>
                    )
                })
            }
        </Loader>
    </>
  )
}

export default Loading