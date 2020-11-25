<template>
    <div class="doc-layout">
        <Topnav toggleMenuButtonVisible class="nav"/>
        <div class="content">
            <aside v-if="menuVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">开始使用</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>
                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
    import Topnav from '../components/Topnav.vue';
    import {inject, Ref} from 'vue';

    export default {
        components: {
            Topnav
        },
        setup() {
            const menuVisible = inject<Ref<boolean>>('menuVisible');
            return {menuVisible};
        }
    };
</script>

<style lang="scss" scoped>
    $aside-index: 0;

    .doc-layout ::v-deep(.topnav) {
        box-shadow: 0 2px 8px #f0f1f2;

    }

    .doc-layout {
        > .nav {
            height: 60px;
            position: fixed;
            width: 100%;
            z-index: 10;
            background: #ffffff;
        }

        > .content {
            padding-top: 60px;
            padding-left: 260px;
            @media (max-width: 500px) {
                padding-left: 0;
            }
        }
    }

    .content {
        display: flex;

        > aside {
            width: 260px;
        }

        > main {
            flex-grow: 1;
            padding: 16px;
            background: white;
        }
    }

    aside {
        width: 260px;
        position: fixed;
        overflow-x: hidden;
        overflow-y: auto;
        top: 60px;
        left: 0;
        bottom: 0;
        border-right: 1px solid #e8e8e8;
        z-index: 10;
        background: #fff;

        > h2 {
            margin-bottom: 4px;

            padding: 0 16px;
        }

        > ol {
            > li {
                > a {
                    display: block;
                    padding: 6px 16px;
                    text-decoration: none;
                }

                .router-link-active {
                    border-right: 5px solid #0d7377;
                    background: #323232;
                    color: white;
                }
            }
        }
    }

    main {
        overflow: auto;
    }
</style>
