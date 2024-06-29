'use client';

import React, { useCallback, useState } from 'react';

import ReactFlow, {
    Controls,
    Background,
    ReactFlowProvider,
    applyEdgeChanges,
    applyNodeChanges,
    MiniMap,
    addEdge,
} from 'reactflow';
import 'reactflow/dist/style.css';

import { defaultEdgeOptions, initialEdges, initialNodes } from '@/utils/constants';

const Flow = () => {
    const [nodes, setNodes] = useState<any>(initialNodes);
    const [edges, setEdges] = useState<any>(initialEdges);

    const onNodesChange = useCallback(
        (changes: any) => setNodes((nds: any) => applyNodeChanges(changes, nds)),
        [],
    );

    const onEdgesChange = useCallback(
        (changes: any) => setEdges((eds: any) => applyEdgeChanges(changes, eds)),
        [],
    );

    const onConnect = useCallback(
        (params: any) => setEdges((eds: any) => addEdge(params, eds)),
        [],
    );

    return (
        <div className="h-screen">
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    defaultEdgeOptions={defaultEdgeOptions}
                    fitView
                >
                    <Background />
                    <Controls />
                    <MiniMap />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
};

export default Flow;
