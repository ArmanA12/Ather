
# Surface Tension Project Setup

To use this component in your own environment, follow these steps:

### 1. Initialize Project
Ensure you have a React project with TypeScript and Tailwind CSS. We recommend using the `shadcn` CLI for standard structure:

```bash
npx shadcn-ui@latest init
```

### 2. Install Dependencies
This component requires Three.js and its React bindings:

```bash
npm install three @react-three/fiber
npm install -D @types/three
```

### 3. Component Directory Structure
It is important to follow the `/components/ui` folder structure for components. This convention allows for:
- **Consistency**: Matches `shadcn` and modern React ecosystem standards.
- **Portability**: Makes it easier to share components across different parts of your application or other projects.
- **Organization**: Separates low-level UI primitives from higher-level business components.

### 4. Implementation
- Place `chrome-grid.tsx` in `components/ui/`.
- Ensure your `tailwind.config.js` is correctly set up to scan the `components` directory.
- Use `h-svh` or `h-screen` on the container to ensure the 3D canvas fills the viewport.

### 5. FAQ
**Why is the canvas black?**
The component is designed with a black background (`bg-black`) to enhance the metallic reflections.

**Hover is not working?**
Ensure no other absolutely positioned elements with `pointer-events-auto` are covering the canvas. The text overlays in the demo use `pointer-events-none` for this reason.
