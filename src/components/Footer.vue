<template>
	<footer class="footer-wrap">
        <ul class="footer">
          <router-link to="/home" tag='li' active-class="active">
            <p><i></i></p>
            <p>首页</p>
          </router-link>
					<router-link to="/invest" tag='li' active-class="active">
						<p><i></i></p>
						<p>投资</p>
					</router-link>
					<router-link to="/account" tag='li' active-class="active">
						<p><i></i></p>
						<p>账户</p>
					</router-link>
					<router-link to="/find" tag='li' active-class="active">
						<p><i></i></p>
						<p>发现</p>
					</router-link>
        </ul>
      </footer>
</template>

<style lang="scss" scoped>
	@import "./../assets/styles/mixin.scss";
	.footer-wrap{
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: $upDownIndex;
		width: 100%;
		border-top: #d8d8d8 .01rem solid;
		background: #fff;
		ul.footer{
			@include fj(center);
			li{
				width: 25%;
				text-align: center;
				padding: .2rem 0 0 0;
				p{
					@include height(true, 1.5rem, 1.5rem);
					@include fontStyle(.6rem, #666);
					i {
						@include spriteIcon(49px, 43px);
					}
				}
				&:nth-child(1) {
					p {
						i {
							background: url("./../assets/images/footer/home.png") no-repeat;
							background-size: 100% 100%;
						}
					}
				}
				&:nth-child(2) {
					p {
						i {
							background: url("./../assets/images/footer/invest.png") no-repeat;
							background-size: 100% 100%;
						}
					}
				}
				&:nth-child(3) {
					p {
						i {
							background: url("./../assets/images/footer/account.png") no-repeat;
							background-size: 100% 100%;
						}
					}
				}
				&:nth-child(4) {
					p {
						i {
							background: url("./../assets/images/footer/find.png") no-repeat;
							background-size: 100% 100%;
						}
					}
				}
				&.active {
					p {
						color: #63af6f;
					}
					&:nth-child(1) {
						p {
							i {
								background: url("./../assets/images/footer/home-active.png") no-repeat;
								background-size: 100% 100%;
							}
						}
					}
					&:nth-child(2) {
						p {
							i {
								background: url("./../assets/images/footer/invest-active.png") no-repeat;
								background-size: 100% 100%;
							}
						}
					}
					&:nth-child(3) {
						p {
							i {
								background: url("./../assets/images/footer/account-active.png") no-repeat;
								background-size: 100% 100%;
							}
						}
					}
					&:nth-child(4) {
						p {
							i {
								background: url("./../assets/images/footer/find-active.png") no-repeat;
								background-size: 100% 100%;
							}
						}
					}
				}
			}
		}
	}
</style>