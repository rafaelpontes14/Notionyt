import Image from "next/image"; 
import Editor from "./components/Editor"

export default function Home() {
  return (
   <div className="min-h-screen p-8 text-zinc-980 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="bg-white w-[1100px] nx-auto rounded-xl min-h-[720px] shadow-sm border border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
        <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-red-400"></button>
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-yellow-400"></button>
            <button className="w-3 h-3 bg-zinc-300 rounded-full group-hover:bg-green-400"></button>
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
   </div>
  );
}
