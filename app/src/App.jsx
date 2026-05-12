    import * as React from "react";

    export default function WindowDimensions() {
      const [width, setWidth] = React.useState(0)
      const [height, setHeight] = React.useState(0)

      React.useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth)
          setHeight(window.innerHeight)
        };

        window.addEventListener("resize", handleResize)

        return () => {
          window.removeEventListener("resize", handleResize)
        }

      }, []);

      return (
        <p>
          The current window dimensions are <strong>{width} by {height}</strong>.
        </p>
      );
    }