
import os

file_path = r'c:\Hackathons\Robotics-Club\roboticsclubdesign.html'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

start_marker = '<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">'
end_marker = '<!-- Team Section -->'

start_idx = content.find(start_marker)
end_idx = content.find(end_marker)

if start_idx == -1 or end_idx == -1:
    print("Markers not found!")
    exit(1)

# We want to keep the start_marker, but replace everything after it up to end_marker
# The replacement should include the 15 cards and the closing divs for the grid and container.
# And also the closing </section> for training.

# Wait, end_marker is '<!-- Team Section -->'.
# The content before it is:
#         </section>
# 
# So we should replace up to end_marker.

new_content = """
                    <!-- 3D Printing -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-cyan-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">3D PRINTING</span>
                            </div>
                            <div class="flip-card-back bg-cyan-900/90 border border-cyan-500/50">
                                <span class="font-bold text-cyan-300 text-sm">HANDS-ON<br>TRAINING</span>
                            </div>
                        </div>
                    </div>
                    <!-- Augmented Reality -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-purple-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">AR / VR</span>
                            </div>
                            <div class="flip-card-back bg-purple-900/90 border border-purple-500/50">
                                <span class="font-bold text-purple-300 text-sm">IMMERSIVE<br>TECH</span>
                            </div>
                        </div>
                    </div>
                    <!-- Blender -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-orange-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">BLENDER</span>
                            </div>
                            <div class="flip-card-back bg-orange-900/90 border border-orange-500/50">
                                <span class="font-bold text-orange-300 text-sm">3D MODELING</span>
                            </div>
                        </div>
                    </div>
                    <!-- Drones -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-sky-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">DRONES</span>
                            </div>
                            <div class="flip-card-back bg-sky-900/90 border border-sky-500/50">
                                <span class="font-bold text-sky-300 text-sm">AERIAL<br>ROBOTICS</span>
                            </div>
                        </div>
                    </div>
                    <!-- Embedded System -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-green-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">EMBEDDED</span>
                            </div>
                            <div class="flip-card-back bg-green-900/90 border border-green-500/50">
                                <span class="font-bold text-green-300 text-sm">HARDWARE<br>LOGIC</span>
                            </div>
                        </div>
                    </div>
                    <!-- Image Processing -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-pink-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">CV / IP</span>
                            </div>
                            <div class="flip-card-back bg-pink-900/90 border border-pink-500/50">
                                <span class="font-bold text-pink-300 text-sm">COMPUTER<br>VISION</span>
                            </div>
                        </div>
                    </div>
                    <!-- IoT -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-blue-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">IoT</span>
                            </div>
                            <div class="flip-card-back bg-blue-900/90 border border-blue-500/50">
                                <span class="font-bold text-blue-300 text-sm">CONNECTED<br>DEVICES</span>
                            </div>
                        </div>
                    </div>
                    <!-- Machine Learning -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-red-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">ML / AI</span>
                            </div>
                            <div class="flip-card-back bg-red-900/90 border border-red-500/50">
                                <span class="font-bold text-red-300 text-sm">INTELLIGENT<br>SYSTEMS</span>
                            </div>
                        </div>
                    </div>
                    <!-- Python -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-yellow-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">PYTHON</span>
                            </div>
                            <div class="flip-card-back bg-yellow-900/90 border border-yellow-500/50">
                                <span class="font-bold text-yellow-300 text-sm">CODING<br>CORE</span>
                            </div>
                        </div>
                    </div>
                    <!-- ROS 2 -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-indigo-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">ROS 2</span>
                            </div>
                            <div class="flip-card-back bg-indigo-900/90 border border-indigo-500/50">
                                <span class="font-bold text-indigo-300 text-sm">ROBOT<br>OS</span>
                            </div>
                        </div>
                    </div>
                    <!-- Gazebo -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-orange-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">GAZEBO</span>
                            </div>
                            <div class="flip-card-back bg-orange-900/90 border border-orange-600/50">
                                <span class="font-bold text-orange-300 text-sm">SIMULATION</span>
                            </div>
                        </div>
                    </div>
                    <!-- FPGA -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-teal-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">FPGA</span>
                            </div>
                            <div class="flip-card-back bg-teal-900/90 border border-teal-500/50">
                                <span class="font-bold text-teal-300 text-sm">LOGIC<br>GATES</span>
                            </div>
                        </div>
                    </div>
                    <!-- Multi Terrain Vehicle Robots -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-lime-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">MTV ROBOTS</span>
                            </div>
                            <div class="flip-card-back bg-lime-900/90 border border-lime-500/50">
                                <span class="font-bold text-lime-300 text-sm">ALL<br>TERRAIN</span>
                            </div>
                        </div>
                    </div>
                    <!-- CoppeliaSim -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-violet-400" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">COPPELIA</span>
                            </div>
                            <div class="flip-card-back bg-violet-900/90 border border-violet-500/50">
                                <span class="font-bold text-violet-300 text-sm">ROBOT<br>SIM</span>
                            </div>
                        </div>
                    </div>
                    <!-- STM32 -->
                    <div class="flip-card h-40">
                        <div class="flip-card-inner">
                            <div class="flip-card-front glass-card border border-white/10">
                                <svg class="w-12 h-12 mb-3 text-blue-500" fill="none" stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z">
                                    </path>
                                </svg>
                                <span class="font-bold font-orbitron text-sm text-white">STM32</span>
                            </div>
                            <div class="flip-card-back bg-blue-900/90 border border-blue-600/50">
                                <span class="font-bold text-blue-300 text-sm">MICRO<br>CONTROLLER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        """

final_content = content[:start_idx + len(start_marker)] + new_content + content[end_idx:]

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print("File updated successfully.")
