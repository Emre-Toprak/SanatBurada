import React from 'react'

const Container = (props) => {
  return (
    <section class={props.class1}>
        <div class="container-xxl">
            {props.children}
        </div>
    </section>
  )
}

export default Container