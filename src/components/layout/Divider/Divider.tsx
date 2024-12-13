// components/Divider/Divider.tsx
interface DividerProps {
    /**
     * The thickness of the divider line in pixels
     * @default 1
     */
    thickness?: number;
    /**
     * The color of the divider
     * @default '#E5E7EB'
     */
    color?: string;
}
  
function Divider({
    thickness = 1,
    color = '#E5E7EB'
}: DividerProps) {
    return (
      <hr
        role="separator"
        style={{
          height: `${thickness}px`,
          backgroundColor: color,
          border: 'none',
          margin: '10px 0'
        }}
      />
    );
}
  
export default Divider;
