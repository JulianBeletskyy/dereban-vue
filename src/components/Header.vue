<template>
    <header class="header fixed-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Dereban</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item mr-2">
                            <select class="form-control">
                                <option value="en">EN</option>
                                <option value="uk">UK</option>
                            </select>
                        </li>

                        <li class="nav-item">
                            <b-dropdown id="ddown-right" right text="Sign In" variant="btn btn-outline-success">
                                <div>
                                    <form name="form" class="px-4 py-3">
                                        <div class="form-group">
                                            <label>Email</label>
                                            <input name="email" class="form-control mr-sm-2" type="text" placeholder="email@example.com" required="required" />
                                        </div>
                                        <div class="form-group">
                                            <label>Password</label>
                                            <input name="password" class="form-control mr-sm-2" type="password" required="required" />
                                        </div>
                                        <div class="d-flex">
                                            <a href="javascript:;" class="btn btn-outline-success my-2 my-sm-0">Sign In</a>
                                            <a href="/recovery" class="align-self-center ml-auto">Forgot password</a>
                                        </div>
                                    </form>
                                </div>
                            </b-dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'Header',
        data () {
            return {
                
            }
        }
    }
</script>

<style>

</style>