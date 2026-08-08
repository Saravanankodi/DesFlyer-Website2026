import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Eyebrow from './ui/Eyebrow'
import { faqs as defaultFaqs } from '../data/faqs'


function TypingText({ text }) {

const [display,setDisplay] = useState("")


useEffect(()=>{

let index = 0

setDisplay("")


const timer = setInterval(()=>{

setDisplay(prev => prev + text[index])

index++

if(index >= text.length){
clearInterval(timer)
}

},25)


return ()=>clearInterval(timer)

},[text])


return <>{display}</>

}



export default function FAQ({

items = defaultFaqs,

title = "Common questions",

eyebrow = "FAQ"

}){


const [active,setActive] = useState(0)


const current = items[active]



return (

<section
className="
relative
px-6
lg:px-10
pt-32
pb-32
overflow-hidden
"
>


{/* animated background */}

<div
className="
absolute
inset-0
bg-[radial-gradient(circle_at_center,rgba(46,111,255,0.15),transparent_40%)]
"
/>


<div
className="
absolute
inset-0
opacity-[0.08]
bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)]
bg-[size:40px_40px]
"
/>



<div
className="
relative
max-w-5xl
mx-auto
"
>


<Eyebrow>
{eyebrow}
</Eyebrow>



<motion.h2

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

className="
mt-5
font-display
font-bold
text-[clamp(2rem,4vw,3rem)]
text-[var(--fg)]
"

>

{title}

</motion.h2>




{/* terminal */}


<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.7
}}

className="
mt-12
rounded-3xl
border
border-[var(--border)]
bg-black/40
backdrop-blur-xl
overflow-hidden
shadow-2xl
"

>



{/* header */}

<div
className="
flex
items-center
gap-2
px-6
py-4
border-b
border-white/10
"
>

<span className="
w-3
h-3
rounded-full
bg-red-400
"/>

<span className="
w-3
h-3
rounded-full
bg-yellow-400
"/>

<span className="
w-3
h-3
rounded-full
bg-green-400
"/>


<p
className="
ml-4
font-mono
text-xs
text-white/50
"
>

DESFLYER_AI_CORE

</p>


</div>





<div
className="
p-8
min-h-[280px]
font-mono
"
>


<p
className="
text-signal
text-sm
mb-6
"
>

SYSTEM ONLINE ●

</p>




<div
className="
text-white/50
text-sm
"
>

USER_QUERY:

</div>



<motion.h3

key={current.q}

initial={{
opacity:0,
x:-20
}}

animate={{
opacity:1,
x:0
}}

className="
mt-3
text-xl
text-white
"

>

&gt; {current.q}

</motion.h3>





<div
className="
mt-8
text-white/50
text-sm
"
>

AI_RESPONSE:

</div>



<p
className="
mt-3
text-white/80
leading-relaxed
max-w-3xl
"
>

<TypingText
text={current.a}
/>

<span className="
animate-pulse
text-signal
"
>
▋
</span>


</p>



</div>




</motion.div>







{/* commands */}


<div
className="
mt-8
grid
sm:grid-cols-2
lg:grid-cols-4
gap-4
"
>


{
items.map((item,index)=>(


<motion.button

key={item.q}

onClick={()=>setActive(index)}


whileHover={{
y:-5
}}


className={`
relative
overflow-hidden
rounded-2xl
border
p-5
text-left
transition
duration-300

${
active===index
?
"border-signal bg-signal/10"
:
"border-[var(--border)] bg-white/5"
}

`}

>


<span
className="
text-xs
text-signal
font-mono
"
>

CMD_0{index+1}

</span>



<p
className="
mt-3
text-sm
text-[var(--fg)]
"
>

{item.q}

</p>




{
active===index &&

<motion.div

layoutId="active"

className="
absolute
bottom-0
left-0
h-[2px]
bg-signal
w-full
"

/>

}



</motion.button>


))
}



</div>




</div>



</section>

)

}