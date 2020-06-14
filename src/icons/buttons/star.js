import * as React from "react"

function SvgComponent(props) {
  return (
    <svg height={24} width={24} {...props}>
      <path d="M66.36 93.2l-.636-.7v-2.4l.39-2.2c.214-1.3.39-2.3.39-2.4s-.13-.1-.524-.3l-.525-.3-.544-1.3c-.3-.8-.547-1.4-.549-1.5s.091-.3.215-.4c.218-.4.22-.4.22-.8v-.4h-1.113c-.045-.1-.181-.3-.302-.5l-.219-.5h-.335l-.334.1-1.149-.7-1.149-.6-.36-.5c-.198-.2-.394-.4-.435-.4-.042-.1-.259-.1-.482-.1h-.407l-1.231-1.6-1.23-1.6.053-.9.053-.8-.381-.5c-.209-.3-.416-.6-.458-.6-.054-.1-.149-.1-.303 0h-.275c-.028 0-.125-.2-.216-.4-.173-.3-.163-.4.056-.4h.119c0-.1-1.009-1.1-1.14-1.2-.057 0-.44-.1-.852-.2l-.748-.1-1.88 1c-1.034.5-1.893.9-1.908.9-.015-.1.24-.3.567-.7.328-.3.595-.6.595-.6s-.209-.2-.464-.4c-.256-.2-.475-.4-.488-.4-.013-.1-.111-.7-.218-1.4-.178-1.2-.187-1.3-.114-1.4.044 0 .411-.2.816-.4l.737-.4 3.78.4c2.079.2 3.833.4 3.896.4.098 0 .107 0 .055-.1-.034 0-.308-.2-.609-.4-.302-.2-.575-.4-.609-.5-.05 0-.032-.2.097-.7.087-.4.183-.7.213-.7s1.811-.7 3.957-1.6l3.903-1.5 1.122.1c1.623.1 1.885.1 1.868.2-.008 0-.575.7-1.259 1.4-.684.8-1.26 1.5-1.281 1.5s-.004.1.04.1c.042.1.832.7 1.756 1.5.924.7 1.68 1.4 1.68 1.4s-.249.3-.553.7l-.553.5-1.02-.1c-.561-.1-1.039-.3-1.063-.3-.026 0 .001-.3.067-.6.06-.3.097-.6.081-.6-.022-.1-.105-.1-.344-.1-.174 0-.33 0-.346.1-.016 0-.095.2-.174.4l-.145.4.106.4c.058.2.092.4.075.4h-.654c-1.028-.1-.91-.2-1.326.4-.198.3-.37.5-.381.6-.013 0 .08.2.255.3.212.2.371.3.698.3.233.1.494.2.579.2.108.1.302.2.634.6.264.3.51.6.548.6.064 0 .394-.9.394-1.1 0 0-.043-.1-.097-.2-.086-.1-.098-.2-.098-.7s.008-.6.091-.6c.24 0 2.477.4 2.524.5.03 0 .489.5 1.02 1.2.825 1 .955 1.1.897 1.2-.038 0-.671.4-1.409.8-.737.5-1.351.8-1.365.8-.015 0-.037.2-.05.5l-.025.4h-.246c-.24 0-.251 0-.479.2-.191.2-.228.3-.207.4.105.5.149.4-.478 1-.375.3-.565.5-.565.5.001.1.055.3.122.5.172.6.174.5-.157.5-.278 0-.28 0-.465-.3-.332-.4-.225-.4-1.171-.4h-.895c-.075.1-.654 1.1-.654 1.2s.659.7.783.7c.059 0 .269-.1.467-.2l.359-.2.2.1.2.1-.039.3c-.021.2-.039.4-.041.5l-.002.2h.251c.138 0 .272 0 .298.1.026 0 .073.2.106.4.094.6.023.5.702.5h.594l.555-.2.555-.3.396.2c.362.1.462.1 1.138.2h.79c.026.1.069.3.094.5.029.3.073.5.114.5h.611c.301 0 .558.1.572.1.015 0 .053.2.085.5.033.3.088.5.126.5.047.1.188.1.445.1h.376l1.084.7c.596.4 1.083.8 1.083.8s-.142.2-.317.4c-.174.2-.317.4-.318.4s-.042.4-.089.8l-.087.6-.246.3c-.317.3-4.549 4.8-4.663 5-.079.1-.08.1-.012.3.041.1.074.3.074.5v.3l-.317.4c-.174.1-.317.3-.317.3s.109.2.243.3c.134.2.244.4.244.4.001.1-.378.6-.441.6-.023 0-.328-.4-.678-.8zm44.99-1.2c-.07-.1-.11-.2-.16-.4-.1-.5-.12-.4.66-1.3.38-.4.7-.8.7-.8 0-.1-.12-.3-.27-.5-.14-.2-.26-.4-.26-.4 0-.1.29-.5.34-.5.03.1.16.2.3.4l.24.4.07.7c.11 1 .15.9-.52 1.7l-.59.7h-.51zm-4.61-2.2c-.18 0-.33 0-.44-.1-.09-.1-.57-.5-1.07-.8-.51-.4-.94-.7-.97-.7s-.05.1-.05.2c0 0-.03.1-.06.1-.09.1-2.59.6-2.64.6-.02 0 .02-.3.09-.5.07-.3.12-.5.12-.5 0-.1-.11-.2-.25-.2l-.26-.2-.01-.6-.02-.7.14-.1c.28-.2 3.39-2.2 3.43-2.2.01 0 .37.2.78.4.42.3.78.5.81.5.04 0 .07-.1.09-.3.02-.3.06-.4.09-.5h.48l.99 1.5c.55.8 1 1.5 1 1.6 0 0-1.21 2.4-1.33 2.5-.05.1-.42.1-.92 0zm-22.783-1c-.394-.1-.737-.1-.761-.1-.024-.1-.346-.9-.716-1.9l-.672-1.9.202-.3.201-.2v-1.1l-.227-.2c-.124-.2-.381-.5-.571-.7l-.344-.4.218-.2c.119-.1.206-.2.193-.2-.014 0-.255-.2-.537-.3l-.512-.4h-1.18c-1.169-.1-1.181-.1-1.317-.2-.075-.1-.357-.3-.625-.6-.268-.2-.502-.4-.519-.4-.018-.1-.048-.7-.068-1.4l-.035-1.2 1.485-1.3 1.486-1.2.821-.1.82-.1.2.2c.183.2.2.2.2.4v.3l.586.2c.322.1.611.2.642.2s.185-.1.341-.3c.157-.1.314-.2.35-.2s.164.1.286.2l.222.1.88.1h.881l.187-.2.186-.1v-.4c0-.3-.017-.4-.061-.4-.033 0-.19.1-.347.3-.158.3-.312.4-.342.4s-.23-.2-.445-.5c-.403-.6-.549-.7-.495-.4.016.1.044.3.063.5.027.4.022.4-.036.4-.038 0-.237-.2-.443-.3-.276-.2-.381-.3-.4-.4-.014-.1-.051-.3-.082-.5-.054-.3-.071-.4-.411-.8-.701-.8-.735-.8-.824-.8-.043.1-.079.1-.079.2 0 0 .186.3.413.6.364.5.407.6.358.7-.099.2-.448.6-.486.6-.04 0-.099-.1-.191-.6-.059-.3-.147-.3-.79-.8l-.277-.2-.275.3c-.262.2-.281.2-.431.1h-.209c-.028 0-.441.3-.916.8-.476.4-.894.8-.93.8-.063 0-.093-.1-.466-1.1-.251-.7-.25-.7.041-.6h1.009l.111-.2c.153-.3.141-.3-.086-.6-.11-.1-.19-.2-.18-.3.01 0 .187-.2.392-.3.308-.3.417-.3.617-.3.217-.1.292-.1.684-.5.243-.2.441-.4.441-.5 0 0-.044-.1-.098-.3-.053-.1-.097-.2-.097-.2 0-.1.352-.3.435-.3.027 0 .122.1.21.2l.16.3.78-.1h.83c.026-.1.071-.2.099-.3l.051-.2.848-.3c.466-.2.855-.4.865-.4s-.046-.1-.124-.2l-.142-.1-.519.1c-.286.1-.55.2-.587.2-.069-.1-.321-.6-.321-.7 0 0 .165-.2.366-.3.201-.2.366-.3.366-.4 0 0-.38-.4-.455-.4-.066.1-1.008 1.3-1.008 1.3s.079.1.176.2l.176.2-.042.4-.042.4-.406.1c-.633.2-.646.2-.768-.1-.058-.1-.126-.2-.151-.3-.029 0-.235 0-.555.1h-.541c-.041-.1.031-.9.083-1 .094-.2 1.704-2.3 1.796-2.4.076-.1.353-.2 1.054-.3.523-.2 1.003-.3 1.066-.3s.772.2 1.575.4c.804.2 1.471.3 1.483.3.101 0-.421.8-.528.8-.084.1-.062.1-.584 0h-.475c0 .1.151.3.337.4l.337.4.187-.1c.103-.1.632-.4 1.175-.8l.987-.6.741-.1h.758c.01-.1-.191-.3-.446-.6-.256-.3-.465-.6-.465-.6.001 0 .269-.3.597-.6l.597-.7.848-.3c.814-.4.851-.4.916-.3.086.1.187.5.148.5-.016 0-.338.1-.716.3-.378.1-.739.2-.802.3-.121 0-.907.9-.907.9 0 .1.161.2.969.7.385.2.714.4.731.4s-.019-.1-.079-.2c-.059-.1-.108-.2-.108-.2 0-.1 1.014-1 1.105-1 .031 0 .503.1 1.048.2.607.1 1.011.2 1.039.2.025 0 .113-.2.195-.3l.149-.3 1.847-.7 1.846-.7.813.2c.45.1 1 .2 1.24.2.23.1.42.1.42.2 0 0-.37.2-.83.5-.48.3-.81.5-.79.5s1.23.2 2.68.3c1.44.2 2.71.3 2.82.3.18 0 .2 0 .66-.4.26-.3.49-.5.52-.5s.14.2.26.4c.11.2.23.4.26.4s.67.1 1.42.2l1.36.1.38.2c.45.2.46.2 1.58.1.46-.1.9-.1.99-.1h.16v1.5c0 .8-.02 1.5-.04 1.6-.02 0-.51 0-1.08.1-.58 0-1.08.1-1.11.1-.04.1-.05.2-.03.5l.02.4-.64.8c-.35.5-.66.9-.68.9-.03 0-.06-.1-.07-.1-.04-.2-.23-1.4-.23-1.5 0 0 .15-.2.32-.4.18-.3.32-.5.32-.5 0-.1.01-.1-1.36.1l-1.18.1-.75.4c-.41.2-.77.4-.8.4-.07.1-.16.6-.12.6.02 0 .24 0 .48-.1.25 0 .47-.1.5-.1.03.1.07.4.08.8l.04.7-.12.1h-.27c-.31 0-.38.1-.47.4-.05.2-.12.4-.16.4s-.38.3-.75.5c-.38.3-.68.5-.68.5 0 .1.04.2.1.3.07.2.08.3.04.4-.09.1-.82.5-.88.5-.03 0-.12-.2-.19-.5-.08-.2-.16-.4-.18-.5-.06 0-.58.2-.62.3-.01.1.01.6.05 1.2.07.9.07 1.1.01 1.1-.03.1-.65.4-1.37.8-.72.5-1.3.8-1.3.9 0 0 .14.2.32.5s.31.5.29.5c-.04.1-1.076.7-1.145.7-.029 0-.152-.2-.274-.4-.168-.4-.243-.5-.319-.5-.155 0-.162.1-.04.6l.113.5.44.3c.243.2.459.3.482.3.057.1-.038.3-.18.3-.104.1-.143.1-.351.1-.324-.1-.332-.1-.298.1s.138.3.337.3c.244 0 .314 0 .477.5.087.2.188.5.218.5.04 0 .37.2.74.3.45.2.68.3.7.4.05.1.06.4.01.4-.02 0-.39-.1-.82-.2s-.79-.1-.806-.1c-.053 0-2.337-2.6-2.337-2.6 0-.1.115-.1.415 0 .322 0 .415 0 .415-.1 0 0-.302-.7-.67-1.5l-.669-1.4-.018-.4c-.016-.4-.032-.5-.112-.5-.203-.1-.277 0-.366.4l-.086.4-.61.4c-.336.3-.644.5-.686.6-.057 0-.082.2-.101.5l-.024.5-.439.2c-.241 0-.481.1-.533.1-.071 0-.143-.2-.306-.6-.476-1.3-.437-1.2-.664-1.3l-.204-.1v-.5c0-.4-.02-.6-.049-.6-.206-.1-3.76-.7-3.787-.7-.031.1.417.9.528 1 .024 0 .185 0 .371-.1l.328-.1.341.4c.188.1.341.3.341.4 0 0-.62.8-.749.9-.058 0-.444.2-.858.3-.499.2-.777.3-.822.2-.037 0-.445-.7-.907-1.6-.461-.9-.868-1.7-.904-1.7-.071-.1-.327-.1-.441 0-.048 0-.078.1-.091.3l-.019.4.591 1.2c.581 1.1.596 1.1.888 1.4.469.3.688.5.771.4h1.209c-.016.1-.568.9-1.227 1.8-.658 1-1.197 1.8-1.197 1.8 0 .1.055.2.123.3.102.1.13.2.169.6.079.8.118.7-.603 1.2-.071.1-.1.2-.133.6-.023.2-.06.4-.083.5-.295.4-1.891 2.3-1.952 2.3h-.8zm5.998-14.2c.127 0 .208-.1.208-.1 0-.1-.085-.3-.189-.5-.285-.5-.284-.5-.058-.8.224-.3.228-.3.117-.5-.114-.1-.17-.1-.389.1l-.193.2.044.8c.043.8.078.9.196.9.031 0 .15-.1.264-.1zm-4.519-1.1c.344-.3.324-.3 1.41-.2.389.1.725.1.747.1s-.077-.2-.22-.5c-.269-.4-.379-.5-.681-.5-.129 0-.139 0-.139.2s-.05.2-.309.2c-.125 0-.197 0-.378-.2l-.224-.3-.349.5c-.193.2-.35.4-.35.5.001.1.102.4.149.4.025 0 .18-.1.344-.2zm6.226-.1c.026 0 .035-.2.018-.3l-.03-.2h-.194c-.223 0-.249 0-.197.4.03.2.04.2.193.2.089 0 .184-.1.21-.1zM55.004 87.1c-.168-.1-.305-.2-.305-.3 0 0 .194-.2.338-.3l.138-.1.3.1c.165.2.314.3.33.3.034.1-.304.5-.421.5-.041 0-.212-.1-.38-.2zm33.196-.5c-.261-.2-.484-.4-.496-.4-.022-.1.218-1 .286-1.1.055-.1 1.005-.8 1.063-.8.108 0 .378.2.378.3s-.635 2.2-.699 2.2c-.044.1-.17 0-.532-.2zm-34.574-.4c-.174-.1-.314-.3-.311-.3.008-.1.455-.7.51-.7.063 0 .731.9.704.9-.04.1-.451.3-.521.3-.036 0-.208-.1-.382-.2zm52.644-2.7c-.84-.2-1.55-.4-1.57-.4-.05-.1-.14-1.1-.1-1.1.04-.1 3.1.7 3.18.7.05.1.29.9.29 1 0 .2-.09.1-1.8-.2zm-3.61-.7c-.06 0-.11-.1-.11-.1s.5-1.1.54-1.1c.05-.1.56 0 .61.1.02 0-.11.3-.28.6-.3.5-.3.5-.47.5h-.29zm-1.53-.2c-.26-.1-.48-.1-.49-.2-.01 0 0-.2.02-.5l.04-.5.5-.5c.27-.2.53-.4.56-.4.07 0 .74.9.74 1 0 0-.14.3-.31.6-.36.7-.33.7-1.06.5zm-34.155-4l-.969-.3.028-.2c.015-.1.048-.2.072-.2.027 0 .416.1.99.4.52.2 1.019.4 1.11.4.142.1.156.1.097.2-.154.1-.343.1-1.328-.3zm-16.687-.3c-.285-.2-.543-.3-.573-.3s-.193 0-.361.1c-.167.1-.341.2-.384.2-.109 0-1.734-1-1.766-1-.029-.1.066-.4.126-.5.021 0 .474.2 1.007.4.532.2.997.4 1.032.4s.217-.1.403-.2c.187-.1.369-.2.404-.2.095 0 .962.9.962.9 0 .1-.233.5-.29.5-.023 0-.275-.1-.56-.3zM64.75 78c-.307-.1-.576-.2-.598-.2-.046 0 .046-.5.107-.5.046-.1 1.175.3 1.238.3.05.1-.046.4-.13.4-.036.1-.264.1-.617 0zm41.63-1.3c-.12-.4-.21-.8-.19-.8h.16c.09 0 .22.2.48.6.19.2.35.5.35.5.01 0-.46.4-.52.4-.03 0-.15-.3-.28-.7zm-40.766.4c-.223-.2-.232-.2-.232-.4 0-.1.019-.2.043-.2.04 0 .413.4.474.6.04.1-.01.1-.285 0zm-19.976-.4c-.062-.1-.402-.8-.402-.9s.13 0 .706.2c.311.1.558.2.549.2-.016.1-.707.5-.774.5h-.079zm58.792-1c-.12-.2-.22-.3-.21-.3.01-.1.37-.3.79-.5.43-.3.8-.5.83-.5.04 0 .18-.4.32-.8s.28-.8.31-.8c.05 0 .16 0 .5.2.24.2.44.3.45.3.02.1-.85 1.5-1.01 1.7-.06.1-1.65.9-1.73.9-.01 0-.12-.1-.25-.2zm-22.397-1.2c-.057 0-.118-.1-.135-.1-.033 0 .165-.4.229-.4.044 0 .106.2.155.4.029.1.021.1-.055.1h-.194zm25.757-1.9c-.11-.1-.12-.2-.06-.2.08-.1 1.04-.5 1.12-.5s.43.3.43.3c0 .1-1.17.6-1.3.6-.03 0-.12-.1-.19-.2zm-30.06-1.4c-.138-.1-.25-.3-.25-.3 0-.1.388-.7.453-.7.032 0 .173.1.312.3.183.2.241.3.211.4-.067.1-.395.5-.437.5-.021 0-.151-.1-.289-.2zm1.086 0c-.014 0 .03-.2.099-.3.159-.3.158-.4-.025-.5-.083-.1-.24-.3-.349-.4l-.198-.2.26-.3c.18-.2.278-.3.317-.2.031 0 .116.2.19.4.121.3.172.3.501.6l.366.3-.034.3c-.019.2-.06.3-.09.3-.031.1-.271.1-.533.1-.365 0-.484 0-.504-.1zM44 68.7c-.052 0-.039-3 .013-3 .026 0 .778.3 1.671.6l1.625.7.18.2c.099.2.182.3.183.4h-1.229c-1.176 0-1.242 0-1.463.1-.128 0-.232.1-.232.1s.113.2.251.3c.139.1.239.3.225.3s-.267.1-.58.2c-.611.2-.598.2-.644.1zm26.812 0c-.143 0-.204-.1-.737-.9-.32-.5-.596-1-.612-1-.017 0-.139-.6-.272-1.3-.132-.6-.252-1.2-.266-1.2-.054-.1-.95-.8-1.016-.8-.038 0-.264.1-.502.2-.239.1-.46.1-.493.1-.075 0-.556-.6-.556-.7s1.683-2.2 1.774-2.2c.075-.1 7.17-.9 7.32-.9.137 0 1.808 1.3 1.808 1.4s-.186.3-.414.5-.43.3-.447.4c-.018 0-.069.5-.113 1s-.101 1-.126 1c-.025.1-.366.6-.757 1.2-.655 1.1-.725 1.1-.89 1.2-.099 0-.63.2-1.18.4l-1 .3-.288.7-.288.6H70.812zm4.94-.8c-.235-.4-.398-.7-.375-.7.065 0 1.53-.4 1.588-.4.138.1.661.6.661.7 0 0-1.234.9-1.385 1-.051 0-.195-.2-.489-.6z" />
      <path
        d="M22 9.8c0 .2-.104.4-.312.6l-4.363 4.2 1.033 6.1c.008 0 .012.1.012.2 0 .2-.044.3-.132.4-.08.1-.2.2-.361.2-.152 0-.312 0-.48-.1L12 18.5l-5.397 2.9c-.176.1-.336.1-.48.1-.169 0-.297-.1-.385-.2-.08-.1-.12-.2-.12-.4 0 0 .008-.1.024-.2l1.033-6.1L2.3 10.4c-.2-.2-.3-.4-.3-.6 0-.3.224-.5.673-.5l6.034-.9 2.704-5.5c.152-.3.349-.5.589-.5s.437.2.589.5l2.704 5.5 6.034.9c.449 0 .673.2.673.5"
        fill="#000"
      />
      <path
        d="M22 8.8c0 .2-.104.4-.312.6l-4.363 4.2 1.033 6.1c.008 0 .012.1.012.2 0 .2-.044.3-.132.4-.08.1-.2.2-.361.2-.152 0-.312 0-.48-.1L12 17.5l-5.397 2.9c-.176.1-.336.1-.48.1-.169 0-.297-.1-.385-.2-.08-.1-.12-.2-.12-.4 0 0 .008-.1.024-.2l1.033-6.1L2.3 9.4C2.1 9.2 2 9 2 8.8c0-.3.224-.5.673-.5l6.034-.9 2.704-5.5c.152-.3.349-.5.589-.5s.437.2.589.5l2.704 5.5 6.034.9c.449 0 .673.2.673.5"
        fill="#DE261D"
      />
    </svg>
  )
}

export default SvgComponent
