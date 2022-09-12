# vue props `required` invalid when write props object outside `defineComponent`

type right when write in defineComponent

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209120108134.avif) 

type error when write outside defineComponent

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209120109518.avif)

it seems that props `required` is infered to `boolean` instead of `true`.

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209120113420.avif)

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209120113940.avif)

we should make required as `true` , and it work well.

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209120114839.avif)

is it a type bug for vue ? it is happened both vscode and webstorm .

the solution is to use `as const` to tell ts this object wont change. and required property can be infered to `true` instead of `boolean`.

![](https://fastly.jsdelivr.net/gh/Dedicatus546/image@main/202209121520385.avif)
