<template>
  <form>
    <div class="help">
      <slot name="help">
        <p>This is some help text.</p>
      </slot>
    </div>
    <div class="fields">
      <slot name="fields">
        <input type="text" placeholder="email" />
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
      </slot>
    </div>
    <div class="buttons">
      <slot name="button">
        <button type="submit">Submit</button>
      </slot>
    </div>
    <slot></slot>
  </form>
</template>
